import {Attribute, ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {SidebarMode} from '../../models/sidebar-mode.enum';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {WindowSizeService} from '../../../../core/src/public-api';
import {distinctUntilChanged, map} from "rxjs/operators";


@Component({
	selector: 'k-sidebar-container',
	templateUrl: './sidebar-container.component.html',
	providers: [SidebarService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarContainerComponent implements OnInit {
	private _mode: SidebarMode = this.sidebarService.mode;
	@Input()
	set mode(mode: SidebarMode) {
		this._mode = mode;
		this.sidebarService.changeMode(mode);
	}

	get mode(): SidebarMode {
		return this.sidebarService.mode;
	}

	private _hasBackdrop: boolean = this.sidebarService.hasBackdrop;
	@Input()
	set hasBackdrop(hasBackdrop: boolean) {
		this._hasBackdrop = hasBackdrop;
		this.sidebarService.changeBackdrop(hasBackdrop);
	}

	get hasBackdrop(): boolean {
		return this.sidebarService.hasBackdrop;
	}

	@Input()
	set fixed(fixed: boolean) {
		this.sidebarService.changeIsFixed(fixed);
	}

	get fixed(): boolean {
		return this.sidebarService.isFixed;
	}

	@Input()
	set closeOnBackdropClick(closeOnBackdropClick: boolean) {
		this.sidebarService.changeCloseOnBackdropClick(closeOnBackdropClick);
	}

	get closeOnBackdropClick(): boolean {
		return this.sidebarService.closeOnBackdropClick;
	}

	get status(): SidebarStatus {
		return this.sidebarService.status;
	}

	@HostBinding('class')
	sidebarContainer = 'k-sidebar-container';

	constructor(
		@Attribute('initialState') private initialState: SidebarStatus,
		private sidebarService: SidebarService,
		private windowSizeService: WindowSizeService
	) {
	}

	private handleMobile(): void {
		this.windowSizeService.windowSize$
			.pipe(
				map(value => value.width <= 500),
				distinctUntilChanged()
			).subscribe(value => {
			if (value) {
				if (!this.hasBackdrop) this.close();
				this.sidebarService.changeBackdrop(true);
				this.sidebarService.changeMode(SidebarMode.Over);
			} else {
				this.sidebarService.changeBackdrop(this._hasBackdrop);
				this.sidebarService.changeMode(this._mode);
			}
		});
	}

	ngOnInit(): void {
		if (this.initialState === SidebarStatus.Opened) {
			this.open();
		} else if (this.initialState === SidebarStatus.Closed) {
			this.close();
		}

		this.handleMobile();
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
