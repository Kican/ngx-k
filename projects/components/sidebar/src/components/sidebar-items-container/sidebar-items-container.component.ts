import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';

@Component({
	selector: '[k-sidebar-items-container]',
	templateUrl: './sidebar-items-container.component.html',
	styleUrls: ['./sidebar-items-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarItemsContainerComponent implements OnInit {

	@HostBinding('class')
	get classList(): string {
		return 'list-unstyled';
	}

	constructor() {
	}

	ngOnInit(): void {
	}

}
