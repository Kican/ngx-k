import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'docs';

	constructor(
		private sidebarDynamicMenuService: SidebarDynamicMenuService,
	) {
	}

	ngOnInit(): void {
	}


	ngAfterViewInit(): void {
		this.sidebarDynamicMenuService.setMenu('main-sidebar', [
			{
				groupId: 'form-builder', title: 'form builder', items: [
					{routerLink: '/form-builder', label: 'simple form builder', itemId: '', type: 'single', iconClass: 'mdi mdi-account'}
				]
			},
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
