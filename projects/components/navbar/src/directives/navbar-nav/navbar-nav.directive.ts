import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kNavbarNav]'
})
export class NavbarNavDirective {

	@HostBinding('class')
	get classList(): string {
		return 'navbar-nav scroll';
	}

}
