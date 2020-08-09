import {SidebarItem} from './sidebar-item.model';
import {SidebarDropdownItem} from './sidebar-dropdown-item.model';

export interface SidebarGroup {
	id: string;
	title: string;
	items: SidebarItem[] | SidebarDropdownItem [];
}
