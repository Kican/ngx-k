import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class MinValidator implements IValidator {
	validator(data, control: AbstractControl): { [p: string]: any } | null {
		return Validators.min(data.value);
	}
}
