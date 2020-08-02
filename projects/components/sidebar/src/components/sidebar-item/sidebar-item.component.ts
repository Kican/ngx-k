import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';

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

	constructor() {
	}

	ngOnInit(): void {
	}

	@HostBinding('class')
	get classList(): string {
		return 'sidebar-item sidebar-single-item';
	}

}
