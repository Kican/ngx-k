import {SelectDataProvider} from '../select-data-provider/select-data-provider';
import {of} from 'rxjs';

export abstract class ValueSelectDataProvider<TData> extends SelectDataProvider<TData> {
	protected constructor(protected items: TData[]) {
		super();
		this.typeHead$.subscribe(value => {
			this.items$ = of(value.length == 0 ? this.items : this.filter(this.items, value));
		});
	}

	abstract filter(_items: TData[], q: string): TData[];
}
