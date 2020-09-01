import {FormGroup} from '@angular/forms';
import {IComponent} from '../_components';

export class ComponentConfig<T = IComponent> {
	data: T;
	form: FormGroup;
}
