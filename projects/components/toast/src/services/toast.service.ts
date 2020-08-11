import {Injectable} from '@angular/core';
import {ToastOption} from '../models/toastOption';

@Injectable({
	providedIn: 'root'
})
export abstract class ToastService {
	abstract success(message?: string): void;

	abstract failed(message?: string): void;

	abstract show(option: ToastOption): void;
}
