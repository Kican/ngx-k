import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'k-sidebar-group',
	templateUrl: './sidebar-group.component.html',
	styleUrls: ['./sidebar-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarGroupComponent implements OnInit {

	@Input()
	title: string;

	constructor() {
	}

	ngOnInit(): void {
	}

}
