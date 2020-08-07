import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarOption]'
})
export class NavbarOptionDirective {

	@HostBinding('class')
	get classList(): string {
		return 'navbar-nav';
	}

}
