import {Injectable} from '@angular/core';
import {IValidator} from '../../classes/validators';
import {RequiredValidator} from '../../classes/validators';

@Injectable({
	providedIn: 'root'
})
export class FormValidatorService {
	validators: IValidator[] = [];

	constructor() {
		this.validators.push(new RequiredValidator());
	}
}
