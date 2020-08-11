import {SidebarService} from './sidebar.service';
import {SidebarConfiguration} from '../../models/sidebar.config';
import {SidebarStatus} from '../../models/sidebar-status.enum';

describe('SidebarServiceUnit', () => {
	let service: SidebarService;
	const configuration = new SidebarConfiguration();
	configuration.overWrite({initialState: SidebarStatus.Closed});

	beforeEach(() => {
		service = new SidebarService(configuration, null);
	});

	it('should observe statusChange$ with opened value when open method called', () => {
		let status: SidebarStatus = SidebarStatus.Closed;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.open();

		expect(status).toBe(SidebarStatus.Opened);
	});

	it('should observe statusChange$ with closed value when close method called', () => {
		service.open();
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.close();

		expect(status).toBe(SidebarStatus.Closed);
	});

	it('should observe statusChange$ with opened status when toggle method called with currently closed status', () => {
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.toggle();

		expect(status).toBe(SidebarStatus.Opened);
	});

	it('should observe statusChange$ with closed status when toggle method called with currently opened status', () => {
		service.open();
		let status: SidebarStatus;
		service.statusChange$.subscribe(value => {
			status = value;
		});

		service.toggle();

		expect(status).toBe(SidebarStatus.Closed);
	});

	it('should observe statusChange$ only when change happen to status', () => {
		const consumer = {
			statusChange: () => {
			}
		};
		const spy = spyOn(consumer, 'statusChange');
		service.statusChange$.subscribe(value => {
			consumer.statusChange();
		});

		service.close();
		service.close();
		service.close();

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('should change the status of sidebar when open method called', () => {
		service.open();

		expect(service.status).toBe(SidebarStatus.Opened);
	});

	it('should change the status of sidebar when close method called', () => {
		service.open();
		service.close();

		expect(service.status).toBe(SidebarStatus.Closed);
	});
});
