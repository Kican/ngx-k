import {IComponent} from './icomponent';
import {FormGroup} from '@angular/forms';

export class ComponentConfig<T = IComponent> {
	data: T;
	form: FormGroup;
}
