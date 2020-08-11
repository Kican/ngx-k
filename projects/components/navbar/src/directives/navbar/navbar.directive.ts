import {Directive, HostBinding, Input} from '@angular/core';
import {NavbarPositionType} from '../../models/navbar-position.type';

@Directive({
	selector: '[kNavbar]'
})
export class NavbarDirective {

	@Input()
	darkMode: boolean;

	@Input()
	bgColor: string = '#FFFFFF';

	@Input()
	shadow: string = '0 5px 15px rgba(0, 0, 0, .05)';

	@Input()
	position: NavbarPositionType;

	@HostBinding('class')
	get classList(): string {
		return [
			'k-navbar',
			this.darkMode ? 'navbar-dark' : 'navbar-light',
			this.position
		].filter(Boolean).join(' ');
	}

	@HostBinding('style.background-color')
	get backgroundColor(): string {
		return this.bgColor;
	}

	@HostBinding('style.box-shadow')
	get boxShadow(): string {
		return this.shadow;
	}

}
