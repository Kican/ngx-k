import {Injectable} from '@angular/core';
import {SidebarGroup} from '../../models/sidebar-group.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {SidebarItem} from '../../models/sidebar-item.model';

export interface SidebarMenu {
	sidebarId: string;
	menus: SidebarGroup[];
}

@Injectable({
	providedIn: 'root'
})
export class SidebarDynamicMenuService {
	private _sidebarMenus: SidebarMenu[] = [];
	private sidebarMenus = new BehaviorSubject<SidebarMenu[]>(this._sidebarMenus);

	constructor() {
	}

	private updateMenus(): void {
		this.sidebarMenus.next(this._sidebarMenus);
	}

	private sidebar(sidebarId: string): SidebarMenu {
		return this._sidebarMenus.find(x => x.sidebarId === sidebarId);
	}

	private sidebarGroups(sidebarId: string): SidebarGroup[] {
		return this.sidebar(sidebarId).menus;
	}

	private groupItems(sidebarId: string, groupId: string): SidebarItem[] {
		const group = this.sidebarGroups(sidebarId).find(x => x.groupId === groupId);
		return group.items;
	}

	addSidebarIfNotExist(sidebarId: string): void {
		if (this.sidebar(sidebarId))
			return;

		this._sidebarMenus.push({sidebarId, menus: []});
	}

	getMenus$(sidebarId: string): Observable<SidebarGroup[]> {
		return this.sidebarMenus.asObservable()
			.pipe(
				filter(value => !!this.sidebar(sidebarId)),
				map(items => items.find(x => x.sidebarId === sidebarId).menus)
			);
	}

	setMenu(sidebarId: string, menus: SidebarGroup[]): void {
		this.addSidebarIfNotExist(sidebarId);
		const sidebar = this.sidebar(sidebarId);
		sidebar.menus = menus;
		this.updateMenus();
	}

	addGroup(sidebarId: string, group: SidebarGroup): void {
		this.addSidebarIfNotExist(sidebarId);
		const sidebarMenu = this.sidebarGroups(sidebarId);
		sidebarMenu.push(group.items ? group : {...group, items: []});
		this.updateMenus();
	}

	removeGroup(sidebarId: string, groupId: string): void {
		const groups = this.sidebarGroups(sidebarId);
		const index = groups.findIndex(x => x.groupId === groupId);
		if (index >= 0) {
			groups.splice(index, 1);
			this.updateMenus();
		}
	}

	addItem(sidebarId: string, groupId: string, menu: SidebarItem): void {
		const items = this.groupItems(sidebarId, groupId);
		items.push(menu);
		this.updateMenus();
	}

	removeItem(sidebarId: string, groupId: string, itemId: string): void {
		const items = this.groupItems(sidebarId, groupId);
		const index = items.findIndex(x => x.itemId === itemId);
		if (index >= 0) {
			items.splice(index, 1);
			this.updateMenus();
		}
	}
}
