import {Component, OnInit, Renderer2} from '@angular/core';
import {DialogService} from '@ngx-k/components/dialog';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit {
	isRtl = new FormControl(false);

	constructor(
		private sidebarDynamicMenuService: SidebarDynamicMenuService,
		private dialogService: DialogService,
		private renderer: Renderer2
	) {
	}

	ngOnInit(): void {
		this.isRtl.valueChanges.subscribe(value => {
			this.renderer.setAttribute(document.body, 'dir', value ? 'rtl' : 'ltr');
		});
	}

	openConfirmDialog(): void {
		this.dialogService.confirm({size: 'small'}).onResult().subscribe(value => alert(value));
	}


	addGroup(groupId: string, title: string): void {
		this.sidebarDynamicMenuService.addGroup('main-sidebar',
			{
				title,
				groupId,
			},
		);
	}

	removeGroup(groupId: string): void {
		this.sidebarDynamicMenuService.removeGroup('main-sidebar', groupId);
	}

	addItem(groupId: string, itemId: string, label: string): void {
		this.sidebarDynamicMenuService.addItem('main-sidebar', groupId, {
			itemId,
			label,
			type: 'single',
			routerLink: '/somewhere',
			iconClass: 'mdi mdi-account'
		});
	}

	removeItem(groupId: string, itemId: string): void {
		this.sidebarDynamicMenuService.removeItem('main-sidebar', groupId, itemId);
	}
}
