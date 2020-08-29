import {SelectDataProvider} from './select-data-provider';
import {HttpClient} from '@angular/common/http';
import {debounceTime} from 'rxjs/operators';

export class HttpSelectDataProvider<TData> extends SelectDataProvider<TData> {
	constructor(private httpClient: HttpClient, private url: string) {
		super();
		this.typeHead$.subscribe(value => {
			this.items$ = httpClient.get<TData[]>(url + `q=${value}`).pipe(debounceTime(500));
		});
	}
}
