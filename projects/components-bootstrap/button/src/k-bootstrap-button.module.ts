import {NgModule} from '@angular/core';
import {KBootstrapButtonDirective} from './directives/kbootstrap-button.directive';


@NgModule({
	declarations: [
		KBootstrapButtonDirective
	],
	exports: [
		KBootstrapButtonDirective
	]
})
export class KBootstrapButtonModule {
}
