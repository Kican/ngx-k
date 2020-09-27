import {SelectDataProvider} from '../select-data-provider/select-data-provider';
import {HttpClient} from '@angular/common/http';
import {debounceTime, map} from 'rxjs/operators';
import {ITitleEntity, PagedResult} from '@ngx-k/core/common';

export class HttpSelectDataProvider<TData extends ITitleEntity = ITitleEntity> extends SelectDataProvider<TData> {
	constructor(private httpClient: HttpClient, private url: string) {
		super();
		this.typeHead$.subscribe(value => {
			this.items$ = httpClient.get<PagedResult<ITitleEntity>>(url + `q=${value}`)
				.pipe(
					debounceTime(500),
					map(x => x.items as TData[])
				);
		});
	}
}
