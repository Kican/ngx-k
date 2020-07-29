import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class AlertDismissService {
	private dismiss = new Subject();
	public dismiss$ = this.dismiss.asObservable();

	dismissAlert(): void {
		this.dismiss.next();
	}
}
