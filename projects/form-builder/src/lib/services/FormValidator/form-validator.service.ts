import {Injectable} from '@angular/core';
import {
	EmailValidator,
	IValidator,
	MaxLengthValidator,
	MaxValidator,
	MinLengthValidator,
	MinValidator,
	RequiredValidator
} from '../../classes/validators';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import {RangeLengthValidator} from '../../classes/validators/range-length-validator';

@Injectable({
	providedIn: 'root'
})
export class FormValidatorService {
	private validators: { [name: string]: IValidator; } = {};

	constructor() {
		this.validators['required'] = new RequiredValidator();
		this.validators['minlength'] = new MinLengthValidator();
		this.validators['maxlength'] = new MaxLengthValidator();
		this.validators['rangelength'] = new RangeLengthValidator();
		this.validators['max'] = new MaxValidator();
		this.validators['min'] = new MinValidator();
		this.validators['email'] = new EmailValidator();
	}

	setValidator(key: string, validator: IValidator): void {
		this.validators[key] = validator;
	}

	getValidator(control: AbstractControl, validator: { name: string }): { [key: string]: any } | null {
		return this.validators[validator.name].validator(validator, control);
	}

	getValidators(control: AbstractControl, validators: { name: string }[]): ValidatorFn[] {
		const _validators = [];

		if (validators == undefined) return _validators;

		for (const validator of validators) {
			_validators.push(this.validators[validator.name].validator(validator, control));
		}
		return _validators;
	}
}
