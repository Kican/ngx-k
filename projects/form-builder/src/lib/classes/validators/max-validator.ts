import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class MaxValidator implements IValidator {
	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return Validators.max(data.value);
	}
}
