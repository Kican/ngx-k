import {Directive, Host, HostListener} from '@angular/core';
import {AlertDismissService} from '../../services/alert-dismiss.service';

@Directive({
	selector: '[kAlertDismissBtn]'
})
export class AlertDismissBtnDirective {

	constructor(@Host() private alertDismissService: AlertDismissService) {
	}

	@HostListener('click', ['$event'])
	onClick($event): void {
		this.alertDismissService.dismissAlert();
	}

}
