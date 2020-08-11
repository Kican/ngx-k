import {Component, Input, OnInit} from '@angular/core';
import {IEditTextComponent, IElementComponent} from '@ngx-k/form-builder';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'k-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit, IElementComponent {
	@Input()
	parentFormGroup: FormGroup;

	@Input()
	componentData: IEditTextComponent;

	control: FormControl;

	constructor() {
		this.control = new FormControl(null, []);
	}

	ngOnInit(): void {
		this.parentFormGroup.addControl(this.toLowerCamelCase(this.componentData.name), this.control)
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}

}
