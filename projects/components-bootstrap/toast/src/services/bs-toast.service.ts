import {Injectable} from '@angular/core';
import {ToastConfig, ToastPosition, ToastRef, ToastService} from '@ngx-k/components/toast';
import {ToastrService} from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class BsToastService extends ToastService {
	constructor(private toastrService: ToastrService) {
		super();
	}

	error(option: ToastConfig): ToastRef {
		const ref = this.toastrService.error(option.message, option.title, {
			positionClass: this.getPositionClass(option.position)
		});
		return undefined;
	}

	success(option: ToastConfig): ToastRef {
		const ref = this.toastrService.success(option.message, option.title, {
			positionClass: this.getPositionClass(option.position)
		});
		return undefined;
	}

	warning(option: ToastConfig): ToastRef {
		const ref = this.toastrService.warning(option.message, option.title, {
			positionClass: this.getPositionClass(option.position)
		});
		return undefined;
	}

	info(option: ToastConfig): ToastRef {
		const ref = this.toastrService.info(option.message, option.title, {
			positionClass: this.getPositionClass(option.position)
		});
		return undefined;
	}

	openComponent(component: any, option: ToastConfig): ToastRef {
		const ref = this.toastrService.error(option.message, option.title, {
			positionClass: this.getPositionClass(option.position)
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
