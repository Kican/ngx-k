import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { KInputTextComponent } from './components/k-input-text/k-input-text.component';
import { KInputDateComponent } from './components/kinput-date/k-input-date.component';
import { KInputTextDirective } from './directive/kinput-text/kinput-text.directive';
import { TestComponent } from './test/test.component';


@NgModule({
	declarations: [KInputTextComponent, KInputDateComponent, KInputTextDirective, TestComponent],
	imports: [
		CommonModule
	]
})
export class KInputModule {
}
