import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {SidebarDynamicMenuService} from '../../services/sidebar-dynamic-menu/sidebar-dynamic-menu.service';
import {Observable} from 'rxjs';
import {SidebarGroup} from '../../models/sidebar-group.model';

@Component({
	selector: 'k-sidebar-dynamic-menu',
	templateUrl: './sidebar-dynamic-menu.component.html',
	styleUrls: ['./sidebar-dynamic-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarDynamicMenuComponent implements OnInit {

	@Input()
	sidebarId: string;

	menus: Observable<SidebarGroup[]>;

	constructor(private sidebarDynamicMenuService: SidebarDynamicMenuService, private cdr: ChangeDetectorRef) {
	}

	ngOnInit(): void {
		this.sidebarDynamicMenuService.registerSidebar(this.sidebarId);
		setTimeout(() => {
			this.menus = this.sidebarDynamicMenuService.getMenu(this.sidebarId);
			this.cdr.detectChanges();
		}, 1);
	}

}
