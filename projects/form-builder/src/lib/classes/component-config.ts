import {IComponent} from './components/icomponent';
import {FormGroup} from '@angular/forms';

export class ComponentConfig<T = IComponent> {
	data: T;
	form: FormGroup;
}
