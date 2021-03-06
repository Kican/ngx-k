import {IComponent} from './icomponent';
import {Injector} from '@angular/core';
import {ComponentConfig} from '../config/component-config';
import {FormValidatorService} from '../services/FormValidator/form-validator.service';
import {FormControl} from '@angular/forms';
import {COMPONENT_DATA} from '../config/component-data';

export abstract class ComponentBase<T = IComponent> {
	config: ComponentConfig<T>;
	validatorService: FormValidatorService;

	protected constructor(protected injector: Injector) {
		this.config = injector.get<ComponentConfig<T>>(COMPONENT_DATA);
		this.validatorService = injector.get(FormValidatorService);
	}

	setControlValidators(control: FormControl, validators: { name: string }[]): void {
		control.setValidators(this.validatorService.getValidators(control, validators));
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
