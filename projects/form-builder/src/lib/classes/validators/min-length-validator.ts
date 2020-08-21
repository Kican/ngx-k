import {IValidator} from './ivalidator';
import {AbstractControl, Validators} from '@angular/forms';

export class MinLengthValidator implements IValidator {
	name = 'minlength';
	length: number;

	validator(control: AbstractControl): { [p: string]: any } | null {
		return Validators.minLength(this.length);
	}
}
