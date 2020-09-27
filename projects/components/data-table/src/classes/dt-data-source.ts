import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

export abstract class DtDataSource<T> extends DataSource<T> {

	public data$ = new BehaviorSubject<T[]>([]);

	public currentCount: number;
	public totalCount: number;

	protected loadingSubject = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingSubject.asObservable();

	sub: Subscription;
	filters: any = {};

	protected constructor(private filterForm?: FormGroup) {
		super();
	}

	connect(): Observable<T[] | ReadonlyArray<T>> {
		if (this.filterForm) {
			this.subscribeToFilterForm();
		}
		return this.data$.asObservable();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.data$.complete();
		this.loadingSubject.complete();
		if (this.sub) {
			this.sub.unsubscribe();
		}
	}

	subscribeToFilterForm() {
		this.addFormValuesToFilterObject(this.filterForm.value);
		this.sub = this.filterForm.valueChanges.subscribe(value => {
			this.addFormValuesToFilterObject(value);
			this.loadData();
		});
	}

	addFormValuesToFilterObject(value: string) {
		for (let key of Object.keys(value)) {
			this.filters[key] = value[key];
			delete this.filters[key];
		}
	}

	abstract loadData(): void;
}

export class ItemsDataSource<T> extends DtDataSource<T> {
	constructor(private items: T[], filterForm?: FormGroup) {
		super(filterForm);
	}

	loadData(): void {
		this.loadingSubject.next(true);

		this.totalCount = this.items.length;

		console.log(this.filters);
		const currentPage = this.paginate(this.filters.page, this.filters.count);
		this.currentCount = currentPage.length;
		this.data$.next(currentPage);

		this.loadingSubject.next(false);
	}

	paginate(page: number, count: number): T[] {
		return this.items.slice((page - 1) * count, page * count);
	}
}

export class HttpDtDataSource<T> extends DtDataSource<T> {
	constructor(private service, filterForm?: FormGroup) {
		super(filterForm);
	}

	loadData(): void {
		this.loadingSubject.next(true);
		this.service.list(this.filters).pipe(
			catchError(() => of([])),
			finalize(() => this.loadingSubject.next(false)))
			.subscribe(value => {
				if (value['items']) {
					this.currentCount = value['items'].length;
					this.totalCount = value['totalCount'];
					this.data$.next(value['items']);
				}
			});
	}
}
