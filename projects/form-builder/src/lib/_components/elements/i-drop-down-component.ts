import {IElementComponent} from '../ielement-component';

export interface IDropDownComponent extends IElementComponent {
	isMulti: boolean;
	items: { id: any, title: string }[];
}
