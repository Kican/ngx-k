import {IComponentDescriptor} from '../../../classes/i-component-descriptor';
import {IComponent} from '../../../_components/icomponent';


export class DropDownDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'DropDownComponent' ? 'drop-down' : null;
	}
}
