import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kCardTitle]'
})
export class CardTitleDirective {

	@HostBinding('class')
	get classList(): string {
		return 'card-title';
	}

}
