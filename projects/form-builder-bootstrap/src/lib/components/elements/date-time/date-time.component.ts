import {Component, Injector, OnInit} from '@angular/core';
import {ComponentBase, IDateTimeComponent} from '@ngx-k/form-builder';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'k-date-time',
	templateUrl: './date-time.component.html',
	styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent extends ComponentBase<IDateTimeComponent> implements OnInit {

	control: FormControl;

	constructor(injector: Injector) {
		super(injector);
		this.control = new FormControl(null);
		this.setControlValidators(this.control, this.config.data.validators);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
	}

	onDateSelect = (shamsiDate: string, gregorianDate: string, timestamp: number) => {
		this.control.patchValue(new Date(gregorianDate).toISOString());
	}

}
