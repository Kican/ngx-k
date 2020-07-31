import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kAlertHeading]'
})
export class AlertHeadingDirective {

	@HostBinding('class')
	class = 'alert-heading';

}
