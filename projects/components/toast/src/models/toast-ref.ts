import {Observable, Subject} from 'rxjs';

export class ToastRef {
	private readonly _onClose = new Subject<void>();
	private readonly _onAction = new Subject<void>();

	onClose(): Observable<void> {
		return this._onClose.asObservable();
	}

	onAction(): Observable<void> {
		return this._onAction.asObservable();
	}

	close(): void {
	}
}
