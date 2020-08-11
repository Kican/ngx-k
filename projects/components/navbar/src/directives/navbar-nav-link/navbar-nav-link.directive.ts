import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarNavLink]'
})
export class NavbarNavLinkDirective {

	@HostBinding('class')
	get classList(): string {
		return 'k-nav-link';
	}

}
