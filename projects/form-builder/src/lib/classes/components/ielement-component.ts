import {IComponent} from './icomponent';

export interface IElementComponent extends IComponent {
	title: string;
	validators: [{ name: string }];
}
