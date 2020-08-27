import {NgModule} from '@angular/core';
import {KTabSetDirective} from './directive/k-tab-set/ktab-set.directive';
import {KTabItemDirective} from './directive/ktab-item/ktab-item.directive';


@NgModule({
	declarations: [
		KTabSetDirective,
		KTabItemDirective
	],
	exports: [
		KTabSetDirective,
		KTabItemDirective
	]
})
export class NgxKTabSetModule {
}
