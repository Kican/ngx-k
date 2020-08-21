import {AbstractControl} from '@angular/forms';

export interface IValidator {
	name: string;

	validator(control: AbstractControl): { [key: string]: any } | null;
}
