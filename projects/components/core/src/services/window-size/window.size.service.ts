import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {WindowSize} from '@ngx-k/components/core/models';

@Injectable({
	providedIn: 'root'
})
export class WindowSizeService {
	private windowSize: BehaviorSubject<WindowSize>;
	public windowSize$: Observable<WindowSize>;

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
		if (isPlatformBrowser(this.platformId)) {
			this.windowSize = new BehaviorSubject<WindowSize>({width: window.innerWidth, height: window.innerHeight});
			this.windowSize$ = this.windowSize.asObservable();
			window.onresize = () => {
				this.windowSize.next({width: window.innerWidth, height: window.innerHeight});
			};
		}
	}
}
