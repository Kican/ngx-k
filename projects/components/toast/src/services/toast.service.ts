import {Injectable} from '@angular/core';
import {ToastConfig} from '../models/toast-config';
import {ToastRef} from '../models/toast-ref';

@Injectable({
	providedIn: 'root'
})
export abstract class ToastService {
	abstract success(option: Partial<ToastConfig>): ToastRef;

	abstract error(option: Partial<ToastConfig>): ToastRef;

	abstract info(option: Partial<ToastConfig>): ToastRef;

	abstract warning(option: Partial<ToastConfig>): ToastRef;

	abstract openComponent(component: any, option: Partial<ToastConfig>): ToastRef;
}
