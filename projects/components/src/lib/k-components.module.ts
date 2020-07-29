import {NgModule} from '@angular/core';
import {KButtonModule} from './modules/button';
import {KAlertModule} from './modules/alert';
import {BadgeModule} from './modules/badge';


@NgModule({
	declarations: [],
	imports: [],
	exports: [
		KButtonModule,
		KAlertModule,
		BadgeModule
	]
})
export class KComponentsModule {
}
