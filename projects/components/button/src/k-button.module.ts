import {NgModule} from '@angular/core';
import {ButtonDirective} from './directives/button/button.directive';

@NgModule({
	declarations: [
		ButtonDirective,
	],
	exports: [
		ButtonDirective,
	]
})
export class KButtonModule {
}
