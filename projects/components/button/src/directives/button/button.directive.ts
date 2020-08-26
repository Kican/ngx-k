import {Directive, Input} from '@angular/core';
import {ColorType, SizeType} from '@ngx-k/components/core/models';

@Directive({
	selector: '[k-button]'
})
export class ButtonDirective {

	@Input()
	color: ColorType = 'default';

	@Input()
	size: SizeType = 'md';

}
