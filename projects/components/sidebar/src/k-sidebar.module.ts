import {ModuleWithProviders, NgModule} from '@angular/core';
import {SidebarContentDirective} from './directives/sidebar-content/sidebar-content.directive';
import {SidebarContainerComponent} from './components/sidebar-container/sidebar-container.component';
import {SidebarDirective} from './directives/sidebar/sidebar.directive';
import {SIDEBAR_CONFIG, SidebarConfig, SidebarConfiguration} from './models/sidebar.config';
import {BackDropComponent} from './components/back-drop/back-drop.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarHeaderComponent} from './components/sidebar-header/sidebar-header.component';
import {SidebarGroupComponent} from './components/sidebar-group/sidebar-group.component';
import {SidebarItemsContainerComponent} from './components/sidebar-items-container/sidebar-items-container.component';
import {SidebarItemComponent} from './components/sidebar-item/sidebar-item.component';
import {SidebarDropdownItemComponent} from './components/sidebar-dropdown-item/sidebar-dropdown-item.component';
import {KCoreModule} from '../../core/src/public-api';

@NgModule({
	declarations: [
		SidebarContainerComponent,
		SidebarContentDirective,
		SidebarDirective,
		SidebarDirective,
		BackDropComponent,
		SidebarHeaderComponent,
		SidebarGroupComponent,
		SidebarItemsContainerComponent,
		SidebarItemComponent,
		SidebarDropdownItemComponent,
	],
	imports: [
		BrowserAnimationsModule,
		KCoreModule
	],
	exports: [
		SidebarContainerComponent,
		SidebarContentDirective,
		SidebarDirective,
		SidebarHeaderComponent,
		SidebarGroupComponent,
		SidebarItemsContainerComponent,
		SidebarItemComponent,
		SidebarDropdownItemComponent,
	],
	providers: [{provide: SIDEBAR_CONFIG, useValue: new SidebarConfiguration()}]
})
export class KSidebarModule {
	public static forRoot(configuration: SidebarConfig): ModuleWithProviders<KSidebarModule> {
		return {
			ngModule: KSidebarModule,
			providers: [{provide: SIDEBAR_CONFIG, useValue: new SidebarConfiguration(configuration)}]
		};
	}
}
