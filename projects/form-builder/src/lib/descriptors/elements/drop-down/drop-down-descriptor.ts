import {IComponentDescriptor} from '../../../classes';
import {IComponent} from '../../../_components';

export class DropDownDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'DropDownComponent' ? 'drop-down' : null;
	}
}
