import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: '[k-sidebar-dropdown-item]',
	templateUrl: './sidebar-dropdown-item.component.html',
	styleUrls: ['./sidebar-dropdown-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('dropdown-items', [
			state('close', style({opacity: 0, height: 0, display: 'none'})),
			state('open', style({})),
			transition('close => open', [
				style({display: 'block'}),
				animate('.1s .0s ease-out', style({height: '*'})),
				animate('.1s .1s ease-out', style({opacity: 1}))
			]),
			transition('open => close', [
				animate('.1s ease-out', style({opacity: 0})),
				animate('.1s .1s ease-out', style({height: 0})),
				style({display: 'none'}),
			]),
		]),
	]
})
export class SidebarDropdownItemComponent implements OnInit {

	@Input()
	label: string;

	@Input()
	iconClass: string;

	isOpen: boolean;

	constructor() {
	}

	ngOnInit(): void {
	}

	@HostBinding('class')
	get classList(): string {
		return [
			'sidebar-item',
			'sidebar-dropdown-item',
			this.isOpen ? 'opened' : ''
		].filter(Boolean).join(' ');
	}

	toggle(): void {
		this.isOpen = !this.isOpen;
	}

}
