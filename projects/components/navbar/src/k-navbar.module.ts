import {NgModule} from '@angular/core';
import {NavbarBrandDirective} from './directives/navbar-brand/navbar-brand.directive';
import {NavbarNavDirective} from './directives/navbar-nav/navbar-nav.directive';
import {NavbarDirective} from './directives/navbar/navbar.directive';
import { NavbarNavItemDirective } from './directives/navbar-nav-item/navbar-nav-item.directive';
import { NavbarNavLinkDirective } from './directives/navbar-nav-link/navbar-nav-link.directive';

@NgModule({
	declarations: [
		NavbarDirective,
		NavbarBrandDirective,
		NavbarNavDirective,
		NavbarNavItemDirective,
		NavbarNavLinkDirective,
	],
	exports: [
		NavbarDirective,
		NavbarBrandDirective,
		NavbarNavDirective,
		NavbarNavItemDirective,
		NavbarNavLinkDirective,
	]
})
export class KNavbarModule {
}
