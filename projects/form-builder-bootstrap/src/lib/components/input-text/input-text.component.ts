import {Component, Input, OnInit} from '@angular/core';
import {IEditTextComponent, IElementComponent, ComponentConfig} from '@ngx-k/form-builder';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'k-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, IElementComponent {
	control: FormControl;

	constructor(public config: ComponentConfig<IEditTextComponent>) {
		console.log(`edit-text`, config);
		this.control = new FormControl('', Validators.required);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
