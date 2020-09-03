import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResult, UrlUtils} from '@ngx-k/core/common';

export abstract class BaseCrudHttpService<TEntityDto, TEntityPartialDto, TEntityInsertDto, TEntityEditDto, TEntityUpsertDto, TEntityFilter> {

	protected constructor(protected url: string, protected http: HttpClient) {
	}

	create<TOutput = any>(resource: TEntityInsertDto): Observable<TOutput> {
		return this.http.post<TOutput>(this.url, resource);
	}

	get(id: number | string): Observable<TEntityDto> {
		return this.http.get<TEntityDto>(`${this.url}/${id}`);
	}

	update<TOutput = any>(resource: TEntityEditDto): Observable<TOutput> {
		return this.http.patch<TOutput>(this.url, resource);
	}

	delete<TOutput = any>(id: number): Observable<TOutput> {
		return this.http.delete<TOutput>(`${this.url}/${id}`);
	}

	list(filter: TEntityFilter | {} | null = null): Observable<PagedResult<TEntityPartialDto>> {
		return this.http.get<PagedResult<TEntityPartialDto>>(this.url + UrlUtils.jsonToQueryString(filter ?? {}));
	}
}
