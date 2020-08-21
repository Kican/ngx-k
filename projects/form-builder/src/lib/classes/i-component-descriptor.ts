import {IComponent} from "./components/icomponent";

export interface IComponentDescriptor {
	isOwner(component: IComponent): string | null;
}
