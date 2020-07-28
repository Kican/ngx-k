import {Directive, HostBinding, Input} from '@angular/core';
import {SizeType} from '@models/size-type';
import {ColorType} from '@models/color-type';

@Directive({
	selector: '[kButton]'
})
export class ButtonDirective {

	@Input()
	color: ColorType;

	@Input()
	size: SizeType;

	@Input()
	isLink: boolean;

	@Input()
	isOutline: boolean;

	@Input()
	isBlock: boolean;

	@HostBinding('class')
	get classList(): string {
		return [
			'btn',
			this.size ? `btn-${this.size}` : ``,
			this.isBlock ? `btn-block` : ``,
			this.isOutline ? `btn-outline-${this.color}` : `btn-${this.color}`,
			this.isLink ? 'btn-link' : ``,
		].filter(Boolean).join(' ');
	}
}
