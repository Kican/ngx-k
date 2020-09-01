import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

export const translateModule = TranslateModule.forRoot();
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		translateModule
	],
	exports: [
		CommonModule,
		TranslateModule
	]
})
export class KCoreModule {
}
