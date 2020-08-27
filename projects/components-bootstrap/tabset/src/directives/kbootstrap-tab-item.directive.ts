import {Directive} from '@angular/core';
import {KTabItemDirective} from '@ngx-k/components/tabset';

@Directive({
	selector: '[k-tab-item]'
})
export class KBootstrapTabItemDirective {

	constructor(private tabItem: KTabItemDirective) {
	}

}
