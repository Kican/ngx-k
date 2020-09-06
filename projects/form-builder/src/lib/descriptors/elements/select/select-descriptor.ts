import {IComponentDescriptor} from '../../../classes/i-component-descriptor';
import {IComponent} from '../../../_components/icomponent';

export class SelectDescriptor  implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'SelectComponent' ? 'select' : null;
	}
}
