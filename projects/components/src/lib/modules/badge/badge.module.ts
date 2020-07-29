import {NgModule} from '@angular/core';
import {BadgeDirective} from './directives/badge/badge.directive';


@NgModule({
	declarations: [
		BadgeDirective
	],
	exports: [
		BadgeDirective
	]
})
export class BadgeModule {
}
