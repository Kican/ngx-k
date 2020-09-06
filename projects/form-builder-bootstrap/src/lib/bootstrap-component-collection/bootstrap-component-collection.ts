import {ComponentCollection} from '@ngx-k/form-builder';
import {InputTextComponent} from '../components/elements/input-text/input-text.component';
import {InputNumberComponent} from '../components/elements/input-number/input-number.component';
import {LinearLayoutComponent} from '../components/layout/linear-layout/linear-layout.component';
import {DropDownComponent} from '../components/elements/drop-down/drop-down.component';
import {DateTimeComponent} from '../components/elements/date-time/date-time.component';
import {InputHiddenComponent} from '../components/elements/input-hidden/input-hidden.component';

export class BootstrapComponentCollection extends ComponentCollection {

	constructor() {
		super();
		this.components['input-number'] = InputNumberComponent;
		this.components['input-hidden'] = InputHiddenComponent;
		this.components['input-date-time'] = DateTimeComponent;
		this.components['drop-down'] = DropDownComponent;
		this.components['input-text'] = InputTextComponent;
		this.components['layout-linear'] = LinearLayoutComponent;
	}
}
