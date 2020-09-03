import {Inject, Injectable} from '@angular/core';
import {TOAST_CONFIG, GlobalToastConfig, ToastConfig, ToastPosition, ToastRef, ToastService} from '@ngx-k/components/toast';
import {ToastrService} from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class BsToastService extends ToastService {
	constructor(
		private toastrService: ToastrService,
		@Inject(TOAST_CONFIG) private config: GlobalToastConfig
	) {
		super();
	}

	error(option: Partial<ToastConfig>): ToastRef {
		const config = {...this.config.error, ...option};

		const ref = this.toastrService.error(config.message, config.title, {
			positionClass: this.getPositionClass(config.position)
		});
		return undefined;
	}

	info(option: Partial<ToastConfig>): ToastRef {
		const config = {...this.config.info, ...option};

		const ref = this.toastrService.info(config.message, config.title, {
			positionClass: this.getPositionClass(config.position)
		});
		return undefined;
	}


	success(option: Partial<ToastConfig>): ToastRef {
		const config = {...this.config.success, ...option};

		const ref = this.toastrService.success(config.message, config.title, {
			positionClass: this.getPositionClass(config.position)
		});
		return undefined;
	}

	warning(option: Partial<ToastConfig>): ToastRef {
		const config = {...this.config.warning, ...option};

		const ref = this.toastrService.warning(config.message, config.title, {
			positionClass: this.getPositionClass(config.position)
		});
		return undefined;
	}

	openComponent(component: any, option: Partial<ToastConfig>): ToastRef {
		const config = {...this.config.default, ...option};
		const ref = this.toastrService.error(config.message, config.title, {
			positionClass: this.getPositionClass(config.position)
		});
		return undefined;
	}

	private getPositionClass(pos: ToastPosition): string {
		switch (pos) {
			case 'right-up':
				return 'toast-top-right';
			case 'right-down':
				return 'toast-bottom-right';
			case 'center-up':
				return 'toast-top-center';
			case 'center-down':
				return 'toast-bottom-center';
			case 'left-up':
				return 'toast-top-left';
			default:
			case 'left-down':
				return 'toast-bottom-left';
		}
	}
}
