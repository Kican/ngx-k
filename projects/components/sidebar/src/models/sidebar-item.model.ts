export interface SidebarItem {
	itemId: string;
	label: string;
	iconClass: string;
	routerLink: string;
	type: 'single' | 'dropdown';
	items?: SidebarItem[];
}
