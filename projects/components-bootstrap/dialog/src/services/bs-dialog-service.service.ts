import {Injectable, TemplateRef} from '@angular/core';
import {take} from 'rxjs/operators';
import {ConfirmDialogBase, DialogConfig, DialogRef, DialogService} from '@ngx-k/components/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {ConfirmDialogComponent} from '../components/confirm-dialog/confirm-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
	providedIn: 'root'
})
export class BsDialogServiceService extends DialogService {

	constructor(private bsModalService: NgbModal) {
		super();
	}

	confirm(config: DialogConfig): DialogRef<ConfirmDialogBase, boolean> {
		return this.open<ConfirmDialogComponent, boolean>(ConfirmDialogComponent, config);
	}

	open<TComponent, TResult>(component: ComponentType<TComponent> | TemplateRef<TComponent>, config: DialogConfig): DialogRef<TComponent, TResult> {
		const size = config.size === 'small' ? 'sm' : config.size === 'mid' ? 'lg' : 'xl';

		const bsDialogRef = this.bsModalService.open(component, {size});
		const ref = new DialogRef<TComponent, TResult>();
		console.log(bsDialogRef.componentInstance);
		ref.componentInstance = bsDialogRef.componentInstance;

		fromPromise(bsDialogRef.result).pipe(
			take(1)
		).subscribe(value => {
			ref.close(value);
		});

		return ref;
	}
}
