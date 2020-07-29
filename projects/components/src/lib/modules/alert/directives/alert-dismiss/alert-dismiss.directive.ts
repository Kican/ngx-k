import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {AlertDismissService} from '../../services/alert-dismiss.service';

@Directive({
	selector: '[kAlertDismiss]',
	providers: [AlertDismissService]
})
export class AlertDismissDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef,
		private alertDismissService: AlertDismissService
	) {
		this.createView();
		this.alertDismissService.dismiss$.subscribe(() => {
			this.dismissAlert();
		});
	}

	private createView(): void {
		this.viewContainerRef.createEmbeddedView(this.templateRef);
	}

	dismissAlert(): void {
		this.viewContainerRef.clear();
	}
}
