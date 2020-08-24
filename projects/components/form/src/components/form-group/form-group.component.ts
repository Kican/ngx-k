import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostBinding, Inject, Input, OnInit, Renderer2,} from '@angular/core';
import {FormLabelDirective} from '../../directives/form-label/form-label.directive';
import {FormInputDirective} from '../../directives/form-input/form-input.directive';
import {NgControl} from '@angular/forms';
import {distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import {fromEvent, merge, Observable} from 'rxjs';
import {CUSTOM_ERROR_MESSAGES, CustomErrorMessageFormatter, CustomErrorMessageFormatters} from '../../models/custom-error-messages.token';

@Component({
	selector: 'k-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements OnInit, AfterContentInit {

	@HostBinding('class')
	get classList(): string {
		return 'form-group';
	}

	@Input()
	id: string;

	@ContentChild(FormLabelDirective, {read: ElementRef})
	label: ElementRef<any>;

	@ContentChild(FormInputDirective, {read: ElementRef})
	input: ElementRef<any>;

	@ContentChild(FormInputDirective, {read: NgControl})
	formControl: NgControl;

	errors: Observable<any>;

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
		@Inject(CUSTOM_ERROR_MESSAGES) private errorMessages: CustomErrorMessageFormatters
	) {
	}

	get isTouchedAndDirty(): boolean {
		return this.formControl?.dirty && this.formControl?.touched;
	}

	get labelContent(): string {
		return this.label.nativeElement.innerHTML;
	}

	ngOnInit(): void {
	}

	ngAfterContentInit(): void {
		this.setInputAndLabelAttributes();
		this.listeningChangesAndSetErrors();
	}

	private setInputAndLabelAttributes(): void {
		this.renderer.setAttribute(this.label?.nativeElement, 'for', this.id);
		this.renderer.setAttribute(this.input?.nativeElement, 'id', this.id);
	}

	private listeningChangesAndSetErrors(): void {
		this.errors = merge(
			fromEvent(this.input.nativeElement, 'blur').pipe(tap(() => {
				if (this.formControl.pristine) this.formControl.control.markAsUntouched();
			})),
			this.formControl.valueChanges,
		).pipe(
			tap(() => {
				if (this.formControl.valid)
					this.renderer.addClass(this.input.nativeElement, 'is-valid');
				else
					this.renderer.removeClass(this.input.nativeElement, 'is-valid');
			}),
			filter(() => this.isTouchedAndDirty),
			map(() => this.mapErrors(this.formControl.errors)),
			distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
			tap(() => {
				this.assignProperClasses();
			})
		);
	}

	private mapErrors(errors: { [key: string]: any }): any {
		if (!errors)
			return null;

		const errorObject = {};
		Object.entries(errors).forEach(([key, error]) => {
			const formatter = this.findFormatter(key);
			errorObject[key] = formatter ? formatter.format(this.labelContent, error) : key;
		});

		return errorObject;
	}

	private findFormatter(key: string): CustomErrorMessageFormatter | null {
		const formatter = this.errorMessages.find(f => f.error === key);
		return formatter ? formatter : null;
	}

	private assignProperClasses(): void {
		this.renderer.addClass(this.el.nativeElement, 'was-validated');
		if (this.formControl.valid) {
			this.renderer.addClass(this.input.nativeElement, 'is-valid');
			this.renderer.removeClass(this.input.nativeElement, 'is-invalid');
		} else if (this.formControl.invalid) {
			this.renderer.addClass(this.input.nativeElement, 'is-invalid');
			this.renderer.removeClass(this.input.nativeElement, 'is-valid');
		}
	}
}
