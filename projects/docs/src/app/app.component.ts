import {AfterViewChecked, AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SidebarDynamicMenuService} from '../../../components/sidebar/src/services/sidebar-dynamic-menu/sidebar-dynamic-menu.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
	title = 'docs';
	isRtl = new FormControl(false);

	constructor(private renderer: Renderer2, private sidebarDynamicMenuService: SidebarDynamicMenuService) {
	}

	ngOnInit(): void {
		this.isRtl.valueChanges.subscribe(value => {
			this.renderer.setAttribute(document.body, 'dir', value ? 'rtl' : 'ltr');
		});
	}

	ngAfterViewChecked(): void {
		setTimeout(() => {
			this.sidebarDynamicMenuService.setMenu('main-sidebar', [
				{
					title: 'Management',
					id: 'test',
					items: [
						{
							id: 'test',
							label: 'Users',
							iconClass: 'mdi mdi-account',
							routerLink: '/'
						}
					]
				}
			]);
		}, 1);
	}

}
