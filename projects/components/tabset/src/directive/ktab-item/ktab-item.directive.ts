import {Directive, Input} from '@angular/core';

@Directive({
	selector: '[k-tab-item]'
})
export class KTabItemDirective {
	@Input()
	title: string;

	constructor() {
	}

}
