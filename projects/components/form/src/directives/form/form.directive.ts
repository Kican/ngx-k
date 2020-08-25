import {Directive, EventEmitter, HostListener, Optional, Output} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Directive({
	selector: '[kForm]'
})
export class FormDirective {
	@Output()
	validSubmit = new EventEmitter<any>();

	constructor(
		@Optional() private formGroup: ControlContainer
	) {
	}

	@HostListener('submit', ['$event'])
	onSubmit(): void {
		if (this.formGroup?.valid)
			this.validSubmit.emit();
	}

}
