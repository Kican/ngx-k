import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {ComponentDescriptorCollection} from './classes/component-descriptor-collection/component-descriptor-collection';

@NgModule({
	declarations: [
		FormBuilderComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		CommonModule,
		FormBuilderComponent
	],
	providers: [
		{provide: ComponentDescriptorCollection, useClass: ComponentDescriptorCollection},
	]
})
export class KFormBuilderModule {
}
