import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar/sidebar.service';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {SidebarConfiguration} from '../../models/sidebar.config';

@Component({
	selector: 'k-sidebar-container',
	templateUrl: './sidebar-container.component.html',
	providers: [SidebarService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContainerComponent implements OnInit {
	@Input()
	set config(config: SidebarConfiguration) {
		this.sidebarService.configure(config);
	}

	get config(): SidebarConfiguration {
		return this.sidebarService.config.getValue();
	}

	get status(): SidebarStatus {
		return this.sidebarService.status;
	}

	@HostBinding('class')
	sidebarContainer = 'k-sidebar-container';

	constructor(private sidebarService: SidebarService,) {
	}

	ngOnInit(): void {
		this.config.initialState === SidebarStatus.Opened ? this.open() : this.close();
	}

	open(): void {
		this.sidebarService.open();
	}

	close(): void {
		this.sidebarService.close();
	}

	toggle(): void {
		this.sidebarService.toggle();
	}
}
