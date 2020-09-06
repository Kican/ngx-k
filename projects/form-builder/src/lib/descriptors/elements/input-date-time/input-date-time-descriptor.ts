import {IComponentDescriptor} from '../../../classes';
import {IComponent} from '../../../_components';

export class InputDateTimeDescriptor implements IComponentDescriptor{
	isOwner(component: IComponent): string | null {
		return component.type == 'DateTimeComponent' ? 'input-date-time' : null;
	}
}
