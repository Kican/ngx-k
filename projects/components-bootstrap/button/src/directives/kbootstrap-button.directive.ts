import {Directive, HostBinding} from '@angular/core';
import {ButtonDirective} from '@ngx-k/components/button';

@Directive({
	selector: '[k-button]'
})
export class KBootstrapButtonDirective {

	constructor(private button: ButtonDirective) {
	}

	@HostBinding('class')
	get classList(): string {
		return [
			'btn',
			this.button.size ? `btn-${this.button.size}` : ``,
			this.button.color ? `btn-${this.button.color}` : ``,
		].join(' ');
	}

}
