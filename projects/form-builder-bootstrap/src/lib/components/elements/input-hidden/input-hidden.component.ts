import {Component, Injector, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ComponentBase, IInputHiddenComponent} from '@ngx-k/form-builder';

@Component({
	selector: 'lib-input-hidden',
	templateUrl: './input-hidden.component.html',
	styleUrls: ['./input-hidden.component.scss']
})
export class InputHiddenComponent extends ComponentBase<IInputHiddenComponent> implements OnInit {
	control: FormControl;

	constructor(injector: Injector) {
		super(injector);
		this.control = new FormControl(null);
		this.setControlValidators(this.control, this.config.data.validators);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

}
