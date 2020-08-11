import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar/sidebar.service';

@Component({
	selector: '[k-sidebar-item]',
	templateUrl: './sidebar-item.component.html',
	styleUrls: ['./sidebar-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemComponent implements OnInit {

	@Input()
	label: string;

	@Input()
	iconClass: string;

	@Input()
	badge: number;

	constructor(private sidebarService: SidebarService) {
	}

	ngOnInit(): void {
	}

	@HostBinding('class')
	get classList(): string {
		return 'sidebar-item sidebar-single-item';
	}

	@HostListener('click', ['$event'])
	onClick($event): void {
		if (this.sidebarService.config.getValue().hasBackdrop)
			this.sidebarService.close();
	}

}
