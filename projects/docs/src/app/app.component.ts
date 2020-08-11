import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'docs';
	isRtl = new FormControl(false);

	constructor(private renderer: Renderer2, private sidebarDynamicMenuService: SidebarDynamicMenuService) {
	}

	ngOnInit(): void {
		this.isRtl.valueChanges.subscribe(value => {
			this.renderer.setAttribute(document.body, 'dir', value ? 'rtl' : 'ltr');
		});
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

	ngAfterViewInit(): void {
		this.sidebarDynamicMenuService.setMenu('main-sidebar', [
			{
				groupId: 'management',
				title: 'Management',
				items: [
					{
						itemId: 'users',
						iconClass: 'mdi mdi-account',
						type: 'dropdown',
						routerLink: '/somewhere',
						label: 'Users',
						items: [
							{
								itemId: 'wallet',
								iconClass: 'mdi mdi-wallet',
								type: 'dropdown',
								routerLink: '/somewhere',
								label: 'Wallets',
								items: [
									{
										itemId: 'wallet',
										iconClass: 'mdi mdi-wallet',
										type: 'dropdown',
										routerLink: '/somewhere',
										label: 'Wallets'
									}
								]
							}
						]
					}
				]
			}
		]);
	}
}
