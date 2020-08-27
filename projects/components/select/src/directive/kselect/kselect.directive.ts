import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {SelectDataProvider} from '../../provider/select-data-provider';

@Directive({
	selector: '[k-select]'
})
export class KSelectDirective {
	@Input()
	bindValue: string;

	@Input()
	bindLabel: string;

	@Input()
	items: any[];

	@Input('data-provider')
	dataProvider: SelectDataProvider<any>;

	@Input()
	multiple: boolean = false;

	@Output()
	add: EventEmitter<any>;

	@Output()
	change: EventEmitter<any>;

	@Output()
	remove: EventEmitter<any>;

	constructor() {
	}

}
