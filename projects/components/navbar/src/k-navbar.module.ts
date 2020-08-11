import {NgModule} from '@angular/core';
import {NavbarBrandDirective} from './directives/navbar-brand/navbar-brand.directive';
import {NavbarNavDirective} from './directives/navbar-nav/navbar-nav.directive';
import {NavbarDirective} from './directives/navbar/navbar.directive';
import {NavbarNavItemDirective} from './directives/navbar-nav-item/navbar-nav-item.directive';
import {NavbarNavLinkDirective} from './directives/navbar-nav-link/navbar-nav-link.directive';
import { NavbarOptionDirective } from './directives/navbar-option/navbar-option.directive';
import { NavbarOptionItemDirective } from './directives/navbar-option-item/navbar-option-item.directive';
import { NavbarOptionLinkDirective } from './directives/navbar-option-link/navbar-option-link.directive';

@NgModule({
	declarations: [
		NavbarDirective,
		NavbarBrandDirective,
		NavbarNavDirective,
		NavbarNavItemDirective,
		NavbarNavLinkDirective,
		NavbarOptionDirective,
		NavbarOptionItemDirective,
		NavbarOptionLinkDirective,
	],
	exports: [
		NavbarDirective,
		NavbarBrandDirective,
		NavbarNavDirective,
		NavbarNavItemDirective,
		NavbarNavLinkDirective,
		NavbarOptionDirective,
		NavbarOptionItemDirective,
		NavbarOptionLinkDirective,
	]
})
export class KNavbarModule {
}
