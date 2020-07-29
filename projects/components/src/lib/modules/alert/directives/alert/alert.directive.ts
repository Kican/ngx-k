import {Directive, ElementRef, HostBinding, Input, Renderer2,} from '@angular/core';
import {ColorType} from '../../../../models/color-type';

@Directive({
	selector: '[kAlert]'
})
export class AlertDirective {

	@Input()
	color: ColorType = 'default';

	@HostBinding('class')
	get classList(): string {
		return [
			'alert',
			`alert-${this.color}`
		].filter(Boolean).join(' ');
	}

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {
		this.setRoleAttribute();
	}

	private setRoleAttribute(): void {
		this.renderer.setAttribute(this.el.nativeElement, 'role', 'alert');
	}
}
