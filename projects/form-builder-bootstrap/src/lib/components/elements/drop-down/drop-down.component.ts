import {Component, Injector, OnInit} from '@angular/core';
import {IDropDownComponent, ComponentBase} from '@ngx-k/form-builder';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'lib-drop-down',
	templateUrl: './drop-down.component.html',
	styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent extends ComponentBase<IDropDownComponent> implements OnInit {
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
