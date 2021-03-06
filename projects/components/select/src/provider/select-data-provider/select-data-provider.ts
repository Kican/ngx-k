import {Observable, Subject} from 'rxjs';

export abstract class SelectDataProvider<TData extends any> {
	public typeHead$ = new Subject<string>();
	public items$: Observable<TData[]>;
}
