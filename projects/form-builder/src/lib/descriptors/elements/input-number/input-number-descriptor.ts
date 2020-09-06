import {IComponentDescriptor} from '../../../classes';
import {IComponent} from '../../../_components';

export class InputNumberDescriptor  implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'NumberFieldComponent' ? 'input-number' : null;
	}
}
