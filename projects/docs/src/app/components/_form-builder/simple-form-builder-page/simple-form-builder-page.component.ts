import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

	showData(): void {
		alert(JSON.stringify(this.form.value));
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.formData = {
				type: 'LinearLayoutComponent',
				name: 'salam',
				orientation: 'vertical',
				children: [
					{name: 'title', type: 'TextFieldComponent', title: 'title', validators: [{name: 'required'}, {name: 'minlength', length: 5}]},
					{name: 'count', type: 'NumberFieldComponent', title: 'count', validators: [{name: 'required'}, {name: 'min', value: 5}, {name: 'max', value: 10}]},
					{
						type: 'LinearLayoutComponent',
						name: 'chetori',
						orientation: 'horizontal',
						children: [
							{name: 'vorodi', type: 'NumberFieldComponent', title: 'my data'},
							{name: 'khoroji', type: 'TextFieldComponent', title: 'your data'}
						]
					},
					{name: 'alias', type: 'TextFieldComponent', title: 'Alias'},
					{
						type: 'LinearLayoutComponent',
						name: 'linear2',
						orientation: 'horizontal',
						children: [
							{name: 'vorodi1', type: 'NumberFieldComponent', title: 'my data'},
							{name: 'khoroji1', type: 'TextFieldComponent', title: 'your data'}
						]
					},
					{
						type: 'LinearLayoutComponent',
						name: 'linear2',
						orientation: 'horizontal',
						children: [
							{name: 'select1', type: 'DropDownComponent', title: 'select one:', items: [{id: 1, title: 'option 1'}, {id: 2, title: 'option 2'}]},
							{name: 'select-multi', type: 'DropDownComponent', title: 'select multi:', isMulti: true, items: [{id: 1, title: 'option 1'}, {id: 2, title: 'option 2'}]}
						]
					}
				]
			};
		}, 0);
	}

}
