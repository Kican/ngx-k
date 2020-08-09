import {Inject, Injectable} from '@angular/core';
import {SidebarStatus} from '../../models/sidebar-status.enum';
import {SIDEBAR_CONFIG, SidebarConfiguration} from '../../models/sidebar.config';
import {BehaviorSubject} from 'rxjs';
import {SidebarMode} from '../../models/sidebar-mode.enum';
import {WindowSizeService} from 'ngx-k-components/core';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Injectable()
export class SidebarService {
	config = new BehaviorSubject<SidebarConfiguration>(this.globalConfig);
	config$ = this.config.asObservable();
	localConfig: SidebarConfiguration = this.config.getValue();

	private statusChange = new BehaviorSubject<SidebarStatus>(this.config.getValue().initialState);
	public statusChange$ = this.statusChange.asObservable();

	get status(): SidebarStatus {
		return this.statusChange.getValue();
	}

	get mode(): SidebarMode {
		return this.config.getValue().mode;
	}

	get position(): string {
		return this.config.getValue().isFixed ? 'fixed' : 'absolute';
	}

	constructor(
		@Inject(SIDEBAR_CONFIG) private globalConfig: SidebarConfiguration,
		private windowSizeService: WindowSizeService
	) {
		this.mobileHandler();
	}

	private mobileHandler(): void {
		this.windowSizeService.windowSize$
			.pipe(
				map(value => value.width <= this.config.getValue().breakpoint),
				distinctUntilChanged())
			.subscribe(value => {
				if (value) {
					this.close();
					this.config.next(new SidebarConfiguration({mode: SidebarMode.Over, hasBackdrop: true}));
				} else
					this.config.next(new SidebarConfiguration(this.localConfig));
			});
	}

	configure(config: SidebarConfiguration): void {
		const conf = this.config.getValue();
		conf.overWrite(config);
		this.localConfig = conf;
		this.config.next(conf);
	}

	open(): void {
		this.statusChange.next(SidebarStatus.Opened);
	}

	close(): void {
		this.statusChange.next(SidebarStatus.Closed);
	}

	toggle(): void {
		this.statusChange.next(this.status === SidebarStatus.Opened ? SidebarStatus.Closed : SidebarStatus.Opened);
	}
}
