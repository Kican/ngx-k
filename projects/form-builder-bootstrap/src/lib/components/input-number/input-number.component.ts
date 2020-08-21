import {Component, Injector, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IEditTextComponent, ComponentBase} from '@ngx-k/form-builder';

@Component({
	selector: 'k-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends ComponentBase<IEditTextComponent> implements OnInit {
	control: FormControl;

	constructor(injector: Injector) {
		super(injector);
		this.control = new FormControl(null);
		this.setControlValidators(this.control, this.config.data.validators);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
