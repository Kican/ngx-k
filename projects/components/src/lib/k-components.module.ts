import {NgModule} from '@angular/core';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KButtonModule} from 'ngx-k-components/button';

@NgModule({
	declarations: [],
	imports: [
		KAlertModule,
		KBadgeModule,
		KButtonModule
	],
	exports: [
		KAlertModule,
		KBadgeModule,
		KButtonModule
	]
})
export class KComponentsModule {
}
