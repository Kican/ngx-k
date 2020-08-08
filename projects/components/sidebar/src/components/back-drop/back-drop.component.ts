import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'k-back-drop',
	templateUrl: './back-drop.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('backdrop', [
			state('void', style([{opacity: 0}])),
			transition('void <=> *', animate('.2s 0s ease-out'))
		])
	]
})
export class BackDropComponent implements OnInit {
	position: string;

	constructor(public sidebarService: SidebarService) {
	}

	ngOnInit(): void {
		this.sidebarService.config$.subscribe(value => {
			this.position = this.sidebarService.position;
		});
	}

	close(): void {
		if (this.sidebarService.config.getValue().closeOnBackdropClick) {
			this.sidebarService.close();
		}
	}
}
