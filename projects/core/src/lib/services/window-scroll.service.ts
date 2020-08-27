import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {shareReplay} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WindowScrollService {
	private windowScroll: BehaviorSubject<WindowScroll>;
	public windowScroll$: Observable<WindowScroll>;

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
		if (isPlatformBrowser(this.platformId)) {
			this.windowScroll = new BehaviorSubject<WindowScroll>({scrollX: window.scrollX, scrollY: window.scrollY});
			this.windowScroll$ = this.windowScroll.asObservable().pipe(shareReplay(1));
			window.onscroll = () => {
				this.windowScroll.next({scrollX: window.scrollX, scrollY: window.scrollY});
			};
		}
	}
}

export interface WindowScroll {
	scrollX: number;
	scrollY: number;
}

