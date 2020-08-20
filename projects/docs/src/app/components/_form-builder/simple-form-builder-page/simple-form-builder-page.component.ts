import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-simple-form-builder-page',
	templateUrl: './simple-form-builder-page.component.html'
})
export class SimpleFormBuilderPageComponent implements OnInit {

	formData;

	form: FormGroup;

	constructor(_fb: FormBuilder) {
		this.form = _fb.group({});

	}

	ngOnInit(): void {
		setTimeout(() => {
			this.formData = {
				type: 'LinearLayoutComponent',
				name: 'salam',
				orientation: 'horizontal',
				children: [
					{name: 'title', type: 'TextFieldComponent', title: 'title'},
					{name: 'count', type: 'NumberFieldComponent', title: 'count'},
				]
			};
		}, 0);
	}

}
