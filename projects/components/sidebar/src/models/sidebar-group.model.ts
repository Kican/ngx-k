import {SidebarItem} from './sidebar-item.model';

export interface SidebarGroup {
	groupId: string;
	title: string;
	items?: SidebarItem[];
}
