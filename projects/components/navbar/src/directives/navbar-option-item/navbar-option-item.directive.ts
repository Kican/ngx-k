import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarOptionItem]'
})
export class NavbarOptionItemDirective {

	@HostBinding('class')
	get classList(): string {
		return 'k-navbar-option-item';
	}

}
