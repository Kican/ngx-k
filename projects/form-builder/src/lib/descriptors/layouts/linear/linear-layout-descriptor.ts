import {IComponentDescriptor} from '../../../classes/i-component-descriptor';
import {IComponent} from '../../../_components/icomponent';

export class LinearLayoutDescriptor implements IComponentDescriptor {
	isOwner(component: IComponent): string | null {
		return component.type == 'LinearLayoutComponent' ? 'layout-linear' : null;
	}
}
