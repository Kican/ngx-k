import {NgModule} from '@angular/core';
import {KBootstrapTabSetDirective} from './directives/k-bootstrap-tab-set.directive';
import { KBootstrapTabItemDirective } from './directives/kbootstrap-tab-item.directive';


@NgModule({
	declarations: [
		KBootstrapTabSetDirective,
		KBootstrapTabItemDirective
	],
	exports: [
		KBootstrapTabSetDirective
	]
})
export class KBootstrapTabSetModule {
}
