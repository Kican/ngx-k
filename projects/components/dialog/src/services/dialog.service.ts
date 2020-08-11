import {Injectable} from '@angular/core';
import {DialogConfig, DialogRef} from '../models';
import {ConfirmDialogBase} from '../components/confirm-dialog-base';

@Injectable({
	providedIn: 'root'
})
export abstract class DialogService {
	abstract confirm(config: DialogConfig): DialogRef<ConfirmDialogBase, boolean>;

	abstract open<TComponent, TResult>(component: any, config: DialogConfig): DialogRef<TComponent, TResult>;
}
