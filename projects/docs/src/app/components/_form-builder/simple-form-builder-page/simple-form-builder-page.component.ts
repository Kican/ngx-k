import {Component, OnInit} from '@angular/core';
import {ILayoutComponent} from '@ngx-k/form-builder';

@Component({
	selector: 'app-simple-form-builder-page',
	templateUrl: './simple-form-builder-page.component.html'
})
export class SimpleFormBuilderPageComponent implements OnInit {

	formData: ILayoutComponent = {
		type: 'LinearLayoutComponent',
		name: '',
		children: [
			{name: 'title', type: 'TextFieldComponent'},
			{name: 'count', type: 'NumberFieldComponent'},
		]
	};

	constructor() {
	}

	ngOnInit(): void {
	}

}
