import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
	selector: 'k-sidebar-header',
	templateUrl: './sidebar-header.component.html',
	styleUrls: ['./sidebar-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeaderComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
