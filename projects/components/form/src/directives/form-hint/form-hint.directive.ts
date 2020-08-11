import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kFormHint]'
})
export class FormHintDirective {

	@HostBinding('class')
	get classList(): string {
		return 'form-text text-muted';
	}

}
