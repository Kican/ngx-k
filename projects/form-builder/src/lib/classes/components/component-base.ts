import {IComponent} from './icomponent';
import {Injector} from '@angular/core';
import {COMPONENT_DATA} from '../../services/form-builder.service';
import {ComponentConfig} from '../component-config';

export abstract class ComponentBase<T = IComponent> {
	config: ComponentConfig<T>;

	protected constructor(protected injector: Injector) {
		this.config = injector.get<ComponentConfig<T>>(COMPONENT_DATA);
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
