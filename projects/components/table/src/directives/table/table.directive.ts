import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector: '[kTable]'
})
export class TableDirective {

	@HostBinding('class')
	get classList(): string {
		return 'table';
	}

}
