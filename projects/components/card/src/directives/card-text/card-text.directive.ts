import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kCardText]'
})
export class CardTextDirective {

	@HostBinding('class')
	get classList(): string {
		return 'card-text';
	}

}
