import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarNavItem]'
})
export class NavbarNavItemDirective {

	@HostBinding('class')
	get classList(): string {
		return 'k-nav-item';
	}

}
