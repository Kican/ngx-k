import {Component, Directive, Input} from '@angular/core';
import {ColorType, SizeType} from '@ngx-k/components/core/models';

@Component({
	selector: 'button[k-button]',
})
export class ButtonDirective {

	@Input()
	color: ColorType = 'default';

	@Input()
	size: SizeType = 'md';

}
