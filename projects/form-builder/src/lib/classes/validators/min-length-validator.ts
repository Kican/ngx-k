import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class MinLengthValidator implements IValidator {
	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return Validators.minLength(data.length);
	}
}
