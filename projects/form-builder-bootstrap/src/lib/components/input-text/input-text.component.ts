import {Component, Inject, Input, OnInit} from '@angular/core';
import {IEditTextComponent, ComponentConfig, COMPONENT_DATA} from '@ngx-k/form-builder';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'k-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
	control: FormControl;
	data: IEditTextComponent;

	constructor(@Inject(COMPONENT_DATA) public config: ComponentConfig<IEditTextComponent>) {
		this.data = config.data;
		this.control = new FormControl('', Validators.required);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
