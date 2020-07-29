import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
import {ColorType} from '../models/color-type';
import {SizeType} from '../models/size-type';

@Directive({
	selector: '[kButton]'
})
export class ButtonDirective {

	@Input()
	color: ColorType = 'default';

	@Input()
	size: SizeType = 'md';

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

	constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
		this.setRoleAttributeIfRequired();
	}

	private setRoleAttributeIfRequired(): void {
		if (this.selector !== 'button')
			this.renderer.setAttribute(this.el.nativeElement, 'role', 'button');
	}

	private get selector(): string {
		return this.el.nativeElement.tagName;
	}
}
