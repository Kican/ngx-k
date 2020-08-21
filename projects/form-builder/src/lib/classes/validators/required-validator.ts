import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class RequiredValidator implements IValidator {
	name = 'validator';

	validator(control: AbstractControl): { [key: string]: any } | null {
		return Validators.required;
	}
}
