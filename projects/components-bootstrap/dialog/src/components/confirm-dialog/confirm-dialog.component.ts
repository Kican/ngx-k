import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'lib-confirm-dialog',
	templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {

	questionText = 'آیا مطمئن هستید؟';
	acceptBtnText = 'بله';
	acceptBtnClass = 'btn-danger';
	declineBtnText = 'خیر';
	declineBtnClass = 'btn-default';

	result = false;

	constructor(public bsModalRef: NgbActiveModal) {
	}

	ngOnInit(): void {
	}

	accept(): void {
		this.result = true;
		this.bsModalRef.close();
	}

}
