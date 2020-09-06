import {IComponentDescriptor} from '../i-component-descriptor';
import {InputNumberDescriptor} from '../../descriptors/elements/input-number/input-number-descriptor';
import {InputTextDescriptor} from '../../descriptors/elements/input-text/input-text-descriptor';
import {LinearLayoutDescriptor} from '../../descriptors/layouts/linear/linear-layout-descriptor';
import {DropDownDescriptor} from '../../descriptors/elements/drop-down/drop-down-descriptor';
import {IComponent} from '../../_components';
import {InputDateTimeDescriptor} from '../../descriptors/elements/input-date-time/input-date-time-descriptor';

export class ComponentDescriptorCollection {
	protected descriptors: IComponentDescriptor[] = [];

	constructor() {
		this.descriptors.push(new InputNumberDescriptor());
		this.descriptors.push(new InputTextDescriptor());
		this.descriptors.push(new LinearLayoutDescriptor());
		this.descriptors.push(new DropDownDescriptor());
		this.descriptors.push(new InputDateTimeDescriptor());
	}

	resolve(component: IComponent): string {
		let componentName = null;
		for (const descriptor of this.descriptors) {
			componentName = descriptor.isOwner(component);

			if (componentName != null)
				return componentName;
		}
		if (componentName == null)
			throw new Error(`handler not found for component [${component.type}]`);
	}
}
