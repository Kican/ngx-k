import {Directive, HostBinding, Input} from '@angular/core';
import {ColorType} from 'ngx-k-components/core/models';

@Directive({
	selector: '[kBadge]'
})
export class BadgeDirective {

	@Input()
	color: ColorType = 'default';

	@Input()
	isPill: boolean;

	@HostBinding('class')
	get classList(): string {
		return [
			'badge',
			`badge-${this.color}`,
			this.isPill ? 'badge-pill' : ''
		].filter(Boolean).join(' ');
	}

}
