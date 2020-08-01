import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AlertDismissService} from '../../services/alert-dismiss.service';

@Directive({
	selector: '[kAlertDismiss]',
	providers: [AlertDismissService]
})
export class AlertDismissDirective implements OnInit {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef,
		private alertDismissService: AlertDismissService
	) {
	}

	ngOnInit(): void {
		this.createView();
		this.listenToDismissBtn();
	}

	private createView(): void {
		this.viewContainerRef.createEmbeddedView(this.templateRef);
	}

	private listenToDismissBtn(): void {
		this.alertDismissService.dismiss$.subscribe(() => {
			this.dismissAlert();
		});
	}

	dismissAlert(): void {
		this.viewContainerRef.clear();
	}

}
