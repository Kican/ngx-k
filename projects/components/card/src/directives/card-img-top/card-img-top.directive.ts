import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kCardImgTop]'
})
export class CardImgTopDirective {

	@HostBinding('class')
	get classList(): string {
		return 'card-img-top';
	}

}
