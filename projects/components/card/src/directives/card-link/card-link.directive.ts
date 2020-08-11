import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kCardLink]'
})
export class CardLinkDirective {

	@HostBinding('class')
	get classList(): string {
		return 'card-link';
	}

}
