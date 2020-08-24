import {InjectionToken} from '@angular/core';

export const CUSTOM_ERROR_MESSAGES = new InjectionToken<any>('CUSTOM_ERROR_MESSAGES');

export interface CustomErrorMessageFormatter {
	error: string;
	format: (label?: string, error?: any) => string;
}

export type CustomErrorMessageFormatters = CustomErrorMessageFormatter[];
