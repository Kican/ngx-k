import {NgModule} from '@angular/core';
import {DatePipe} from './pipe/date/date.pipe';


@NgModule({
	declarations: [
		DatePipe
	],
	imports: [],
	exports: [
		DatePipe
	]
})
export class KCoreCommonModule {
}
