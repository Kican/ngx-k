import {Directive, HostBinding, Input} from '@angular/core';
import {SizeType} from 'ngx-k-components/core/models';

@Directive({
	selector: '[kFormInput]'
})
export class FormInputDirective {

	@Input()
	size: SizeType = 'md';

	@Input()
	isPlainText: boolean;

	@HostBinding('class')
	get classList(): string {
		if (this.isPlainText)
			return 'form-control-plaintext';

		return [
			'form-control',
			`form-control-${this.size}`,
		].join(' ');
	}

}
