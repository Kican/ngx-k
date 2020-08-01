import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kCardSubtitle]'
})
export class CardSubtitleDirective {

	@HostBinding('class')
	get classList(): string {
		return 'card-subtitle text-muted';
	}

}
