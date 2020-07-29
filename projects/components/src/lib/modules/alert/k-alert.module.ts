import {NgModule} from '@angular/core';
import {AlertDirective} from './directives/alert/alert.directive';
import {AlertDismissDirective} from './directives/alert-dismiss/alert-dismiss.directive';
import {AlertDismissBtnDirective} from './directives/alert-dismiss-btn/alert-dismiss-btn.directive';
import {AlertHeadingDirective} from './directives/alert-heading/alert-heading.directive';
import {AlertLinkDirective} from './directives/alert-link/alert-link.directive';


@NgModule({
	declarations: [
		AlertDirective,
		AlertDismissDirective,
		AlertDismissBtnDirective,
		AlertHeadingDirective,
		AlertLinkDirective
	],
	exports: [
		AlertDirective,
		AlertDismissDirective,
		AlertDismissBtnDirective,
		AlertHeadingDirective,
		AlertLinkDirective
	],
})
export class KAlertModule {
}
