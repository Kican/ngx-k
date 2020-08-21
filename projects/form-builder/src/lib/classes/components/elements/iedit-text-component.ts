import {IComponent} from "../icomponent";

export interface IEditTextComponent extends IComponent {
	title: string;
	validators: [{ name: string }];
}
