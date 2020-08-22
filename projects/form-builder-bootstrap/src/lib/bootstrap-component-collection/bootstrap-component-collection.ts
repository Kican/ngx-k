import {ComponentCollection} from '@ngx-k/form-builder';
import {InputTextComponent} from '../components/elements/input-text/input-text.component';
import {InputNumberComponent} from '../components/elements/input-number/input-number.component';
import {LinearLayoutComponent} from '../components/layout/linear-layout/linear-layout.component';
import {DropDownComponent} from '../components/elements/drop-down/drop-down.component';

export class BootstrapComponentCollection extends ComponentCollection {

	constructor() {
		super();
		this.components['input-number'] = InputNumberComponent;
		this.components['drop-down'] = DropDownComponent;
		this.components['input-text'] = InputTextComponent;
		this.components['layout-linear'] = LinearLayoutComponent;
	}
}
