import {Directive} from '@angular/core';
import {KTabSetDirective} from '@ngx-k/components/tabset';

@Directive({
	selector: '[k-tab-set]'
})
export class KBootstrapTabSetDirective {

	constructor(private tabset: KTabSetDirective) {
	}

}
