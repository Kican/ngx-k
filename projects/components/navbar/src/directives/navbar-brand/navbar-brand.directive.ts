import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarBrand]'
})
export class NavbarBrandDirective {

	@HostBinding('class')
	get classList(): string {
		return 'navbar-brand';
	}

}
