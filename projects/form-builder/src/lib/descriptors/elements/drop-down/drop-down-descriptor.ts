import {IComponent, IComponentDescriptor} from '../../../classes';

export class DropDownDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'DropDownComponent' ? 'drop-down' : null;
	}
}
