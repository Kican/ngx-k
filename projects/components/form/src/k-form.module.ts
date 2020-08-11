import {NgModule} from '@angular/core';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {FormLabelDirective} from './directives/form-label/form-label.directive';
import {FormInputDirective} from './directives/form-input/form-input.directive';
import {FormHintDirective} from './directives/form-hint/form-hint.directive';

@NgModule({
	declarations: [
		FormGroupComponent,
		FormLabelDirective,
		FormInputDirective,
		FormHintDirective
	],
	exports: [
		FormGroupComponent,
		FormLabelDirective,
		FormInputDirective,
		FormHintDirective
	]
})
export class KFormModule {
}
