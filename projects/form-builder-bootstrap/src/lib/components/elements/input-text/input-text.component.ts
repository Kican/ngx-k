import {Component, Injector, OnInit} from '@angular/core';
import {IEditTextComponent, ComponentBase} from '@ngx-k/form-builder';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'k-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends ComponentBase<IEditTextComponent> implements OnInit {
	control: FormControl;
	data: IEditTextComponent;

	constructor(inject: Injector) {
		super(inject);
		this.data = this.config.data;
		this.control = new FormControl('');
		this.setControlValidators(this.control, this.config.data.validators);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}
}
