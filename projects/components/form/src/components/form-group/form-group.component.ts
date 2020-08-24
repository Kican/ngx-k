import {
	AfterContentInit,
	ChangeDetectionStrategy,
	Component, ContentChild,
	ElementRef,
	HostBinding, Input,
	OnInit,
	Renderer2,
} from '@angular/core';
import {FormLabelDirective} from '../../directives/form-label/form-label.directive';
import {FormInputDirective} from '../../directives/form-input/form-input.directive';
import {NgControl} from '@angular/forms';
import {distinctUntilChanged, filter, map, tap} from 'rxjs/operators';
import {fromEvent, merge, Observable} from 'rxjs';

@Component({
	selector: 'k-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements OnInit, AfterContentInit {

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
	) {
	}

	ngOnInit(): void {
	}

	@HostBinding('class')
	get classList(): string {
		return 'form-group';
	}

	get isTouchedAndDirty(): boolean {
		return this.formControl?.dirty && this.formControl?.touched;
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
			fromEvent(this.input.nativeElement, 'blur'),
			this.formControl.valueChanges,
		).pipe(
			filter(() => this.isTouchedAndDirty),
			map(() => this.formControl.errors),
			distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
			tap(() => {
				this.assignProperClasses();
			})
		);
	}

	private assignProperClasses(): void {
		this.renderer.addClass(this.el.nativeElement, 'was-validated');
		if (this.formControl.valid) {
			this.renderer.addClass(this.input.nativeElement, 'is-valid');
			this.renderer.removeClass(this.input.nativeElement, 'is-invalid');
		} else {
			this.renderer.addClass(this.input.nativeElement, 'is-invalid');
			this.renderer.removeClass(this.input.nativeElement, 'is-valid');
		}
	}
}
