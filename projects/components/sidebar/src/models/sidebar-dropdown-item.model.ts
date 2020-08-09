import {SidebarItem} from './sidebar-item.model';

export interface SidebarDropdownItem extends SidebarItem {
	items: SidebarItem[];
}
