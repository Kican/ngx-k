import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {shareReplay} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WindowSizeService {
	private windowSize: BehaviorSubject<WindowSize>;
	public windowSize$: Observable<WindowSize>;

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
		if (isPlatformBrowser(this.platformId)) {
			this.windowSize = new BehaviorSubject<WindowSize>({width: window.innerWidth, height: window.innerHeight});
			this.windowSize$ = this.windowSize.asObservable().pipe(shareReplay(1));
			window.onresize = () => {
				this.windowSize.next({width: window.innerWidth, height: window.innerHeight});
			};
		}
	}
}

export interface WindowSize {
	width: number;
	height: number;
}
