import {FormGroup} from '@angular/forms';
import {IComponent} from '../_components/icomponent';

export class ComponentConfig<T = IComponent> {
	data: T;
	form: FormGroup;
}
