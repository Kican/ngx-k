import {Directive, HostBinding, Input} from '@angular/core';
import {ColorType} from 'ngx-k-components/core/models';
import {NavbarPositionType} from '../../models/navbar-position.type';

@Directive({
	selector: '[kNavbar]'
})
export class NavbarDirective {

	@Input()
	darkMode: boolean;

	@Input()
	bgColor: ColorType = 'default';

	@Input()
	position: NavbarPositionType;

	@HostBinding('class')
	get classList(): string {
		return [
			'navbar',
			`bg-${this.bgColor}`,
			this.darkMode ? 'navbar-dark' : 'navbar-light',
			this.position
		].filter(Boolean).join(' ');
	}

}
