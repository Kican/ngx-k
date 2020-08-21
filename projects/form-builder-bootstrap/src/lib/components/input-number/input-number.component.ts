import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IEditTextComponent, ComponentConfig, COMPONENT_DATA} from '@ngx-k/form-builder';

@Component({
	selector: 'k-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
	control: FormControl;

	constructor(@Inject(COMPONENT_DATA) public config: ComponentConfig<IEditTextComponent>) {
		this.control = new FormControl(null, []);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
