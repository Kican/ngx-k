import {NgModule} from '@angular/core';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {FormLabelDirective} from './directives/form-label/form-label.directive';
import {FormInputDirective} from './directives/form-input/form-input.directive';
import {FormHintDirective} from './directives/form-hint/form-hint.directive';
import {CommonModule} from '@angular/common';
import {FileInputModule} from './modules/file-input/file-input.module';
import {FormErrorsComponent} from './components/form-errors/form-errors.component';

@NgModule({
	declarations: [
		FormGroupComponent,
		FormLabelDirective,
		FormInputDirective,
		FormHintDirective,
		FormErrorsComponent,
	],
	exports: [
		FormGroupComponent,
		FormLabelDirective,
		FormInputDirective,
		FormHintDirective,
		FileInputModule
	],
	imports: [
		CommonModule,
	]
})
export class KFormModule {
}
