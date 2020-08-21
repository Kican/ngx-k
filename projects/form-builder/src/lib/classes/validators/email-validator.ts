import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class EmailValidator implements IValidator {
	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return Validators.email(control);
	}
}
