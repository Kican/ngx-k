export class ToastConfig {
	title: string;
	message: string;
	action: string;
	position: ToastPosition;
}

export type ToastPosition = 'left-up' | 'left-down' | 'right-up' | 'right-down' | 'center-up' | 'center-down' ;
