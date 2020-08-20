import {ILayoutComponent} from '../../ilayout-component';

export interface ILinearLayoutComponent extends ILayoutComponent {
	orientation: LinearLayoutOrientation;
}

export type LinearLayoutOrientation = 'vertical' | 'horizontal';
