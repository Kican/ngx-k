import {Injectable} from '@angular/core';
import {ToastConfig} from '../models/toast-config';
import {ToastRef} from '../models/toast-ref';

@Injectable({
	providedIn: 'root'
})
export abstract class ToastService {
	abstract success(option: ToastConfig): ToastRef;

	abstract error(option: ToastConfig): ToastRef;

	abstract info(option: ToastConfig): ToastRef;

	abstract warning(option: ToastConfig): ToastRef;

	abstract openComponent(component: any, option: ToastConfig): ToastRef;
}
