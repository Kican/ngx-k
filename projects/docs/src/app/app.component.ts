import {Component, OnInit, Renderer2} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'docs';
	isRtl = new FormControl(false);

	constructor(private renderer: Renderer2) {
	}

	ngOnInit(): void {
		this.isRtl.valueChanges.subscribe(value => {
			this.renderer.setAttribute(document.body, 'dir', value ? 'rtl' : 'ltr');
		});
	}

}
