import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
	declarations: [
		ButtonComponent,
		IconButtonComponent
	],
	exports: [
		ButtonComponent
	],
	imports: [
		CommonModule
	]
})
export class ButtonModule {
}
