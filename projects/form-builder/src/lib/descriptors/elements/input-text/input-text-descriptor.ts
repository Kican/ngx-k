import {IComponentDescriptor} from '../../../classes/i-component-descriptor';
import {IComponent} from '../../../_components/icomponent';

export class InputTextDescriptor  implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'TextFieldComponent' ? 'input-text' : null;
	}
}
