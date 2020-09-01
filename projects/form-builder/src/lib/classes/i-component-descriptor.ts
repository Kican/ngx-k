import {IComponent} from "../_components/icomponent";

export interface IComponentDescriptor {
	isOwner(component: IComponent): string | null;
}
