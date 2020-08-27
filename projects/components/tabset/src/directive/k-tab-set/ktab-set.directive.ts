import {Directive, Input} from '@angular/core';

@Directive({
	selector: '[k-tab-set]'
})
export class KTabSetDirective {
	@Input()
	isLazyLoading: boolean;

	constructor() {
	}

}
