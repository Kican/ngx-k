import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class RequiredValidator implements IValidator {
	name = 'required';

	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return Validators.required;
	}
}
