import {ComponentCollection} from '@ngx-k/form-builder';
import {InputTextComponent} from '../components/input-text/input-text.component';
import {InputNumberComponent} from '../components/input-number/input-number.component';
import {LinearLayoutComponent} from '../components/layout/linear-layout/linear-layout.component';

export class BootstrapComponentCollection extends ComponentCollection {

	constructor() {
		super();
		this.components['input-number'] = InputNumberComponent;
		this.components['input-text'] = InputTextComponent;
		this.components['layout-linear'] = LinearLayoutComponent;
	}
}
