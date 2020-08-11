import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kAlertLink]'
})
export class AlertLinkDirective {

	@HostBinding('class')
	class = 'alert-link';

}
