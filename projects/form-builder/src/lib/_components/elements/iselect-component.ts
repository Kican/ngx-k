import {IElementComponent} from '../ielement-component';

export interface ISelectComponent extends IElementComponent {
	fetchUrl: string;
	queryName: string;
}
