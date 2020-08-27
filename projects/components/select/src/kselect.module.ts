import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KSelectDirective} from './directive/kselect/kselect.directive';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
	declarations: [
		KSelectDirective
	],
	exports: [
		KSelectDirective
	],
	imports: [
		HttpClientModule,
		CommonModule
	]
})
export class KSelectModule {
}
