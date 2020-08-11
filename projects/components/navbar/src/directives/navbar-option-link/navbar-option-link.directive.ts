import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarOptionLink]'
})
export class NavbarOptionLinkDirective {

	@HostBinding('class')
	get classList(): string {
		return 'k-navbar-option-link';
	}

}
