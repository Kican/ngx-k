import {AbstractControl} from '@angular/forms';

export interface IValidator {
	validator(data, control: AbstractControl): { [key: string]: any } | null;
}
