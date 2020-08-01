import {NgModule} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {CardTextDirective} from './directives/card-text/card-text.directive';
import {CardLinkDirective} from './directives/card-link/card-link.directive';
import {CardImgTopDirective} from './directives/card-img-top/card-img-top.directive';
import {CardHeaderComponent} from './components/card-header/card-header.component';
import {CardBodyComponent} from './components/card-body/card-body.component';
import {CardFooterComponent} from './components/card-footer/card-footer.component';
import { CardTitleDirective } from './directives/card-title/card-title.directive';
import { CardSubtitleDirective } from './directives/card-subtitle/card-subtitle.directive';

@NgModule({
	declarations: [
		CardComponent,
		CardHeaderComponent,
		CardBodyComponent,
		CardFooterComponent,
		CardTextDirective,
		CardLinkDirective,
		CardImgTopDirective,
		CardTitleDirective,
		CardSubtitleDirective
	],
	exports: [
		CardComponent,
		CardHeaderComponent,
		CardFooterComponent,
		CardBodyComponent,
		CardTextDirective,
		CardLinkDirective,
		CardImgTopDirective,
		CardTitleDirective,
		CardSubtitleDirective
	]
})
export class KCardModule {
}
