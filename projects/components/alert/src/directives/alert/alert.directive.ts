import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {ColorType} from '@ngx-k/components/core/models';

@Directive({
	selector: '[kAlert]'
})
export class AlertDirective implements OnInit {

	@Input()
	color: ColorType = 'default';

	@HostBinding('class')
	get classList(): string {
		return [
			'alert',
			`alert-${this.color}`
		].filter(Boolean).join(' ');
	}

	constructor(private el: ElementRef, private renderer: Renderer2) {
	}

	ngOnInit(): void {
		this.setRoleAttribute();
	}

	private setRoleAttribute(): void {
		this.renderer.setAttribute(this.el.nativeElement, 'role', 'alert');
	}

}
