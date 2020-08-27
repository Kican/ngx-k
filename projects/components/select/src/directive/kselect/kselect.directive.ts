import {Directive, Input} from '@angular/core';

@Directive({
	selector: '[k-select]'
})
export class KSelectDirective {

	@Input()
	bindValue: string;

	@Input()
	bindLabel: string;

	constructor() {
	}

}
