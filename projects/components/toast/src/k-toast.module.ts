import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultGlobalToastConfig, GlobalToastConfig, TOAST_CONFIG} from './models/toast-config';


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class KToastModule {
	public static forRoot(config: Partial<GlobalToastConfig> = {}): ModuleWithProviders<KToastModule> {
		return {
			ngModule: KToastModule,
			providers: [{provide: TOAST_CONFIG, useValue: {...DefaultGlobalToastConfig, ...config}}]
		};
	}
}
