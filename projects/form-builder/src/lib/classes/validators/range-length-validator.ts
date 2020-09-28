import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class RangeLengthValidator implements IValidator {
	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return [Validators.minLength(data.min), Validators.maxLength(data.max)];
	}
}
