import {Injectable} from '@angular/core';
import {SidebarGroup} from '../../models/sidebar-group.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface SidebarMenu {
	sidebarId: string;
	menus: SidebarGroup[];
}

@Injectable({
	providedIn: 'root'
})
export class SidebarDynamicMenuService {
	private menus = new BehaviorSubject<SidebarMenu[]>([]);

	constructor() {
	}

	registerSidebar(sidebarId: string): void {
		const menu = this.menus.getValue();
		menu.push({sidebarId, menus: []});
		this.menus.next(menu);
	}

	getMenu(sidebarId: string): Observable<SidebarGroup[]> {
		return this.menus.asObservable()
			.pipe(
				map(items => items.find(x => x.sidebarId === sidebarId).menus)
			);
	}

	setMenu(sidebarId: string, menus: SidebarGroup[]): void {
		const menu = this.menus.getValue();
		menu.find(x => x.sidebarId === sidebarId).menus = menus;
		this.menus.next(menu);
	}

	getSidebarMenus(sidebarId: string): SidebarGroup[] {
		return this.menus.getValue().find(x => x.sidebarId === sidebarId).menus;
	}
}
