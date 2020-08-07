import {Inject, Injectable, PLATFORM_ID, PlatformRef} from '@angular/core';
import {Subject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {WindowSize} from 'ngx-k-components/core/models';

@Injectable({
	providedIn: 'root'
})
export class WindowSizeService {
	private windowSize = new Subject<WindowSize>();
	public windowSize$ = this.windowSize.asObservable();

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
		if (isPlatformBrowser(this.platformId)) {
			this.windowSize.next({width: window.innerWidth, height: window.innerHeight});
			window.onresize = () => {
				this.windowSize.next({width: window.innerWidth, height: window.innerHeight});
			};
		}
	}
}
