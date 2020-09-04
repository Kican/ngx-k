import {InjectionToken} from '@angular/core';

export interface ToastConfig {
	title: string;
	message: string;
	action: string;
	position: ToastPosition;
}

export interface GlobalToastConfig {
	default: Partial<ToastConfig>;
	success: Partial<ToastConfig>;
	error: Partial<ToastConfig>;
	info: Partial<ToastConfig>;
	warning: Partial<ToastConfig>;
}

export const DefaultToastConfig: ToastConfig = {
	action: '',
	message: '',
	position: 'right-down',
	title: ''
};
export const DefaultGlobalToastConfig: GlobalToastConfig = {
	default: DefaultToastConfig,
	error: DefaultToastConfig,
	info: DefaultToastConfig,
	success: DefaultToastConfig,
	warning: DefaultToastConfig
};

export const TOAST_CONFIG = new InjectionToken<GlobalToastConfig>('ToastConfig');

export type ToastPosition = 'left-up' | 'left-down' | 'right-up' | 'right-down' | 'center-up' | 'center-down' ;
