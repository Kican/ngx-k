import {
	AfterContentInit,
	ChangeDetectionStrategy,
	Component, ContentChild,
	ElementRef,
	HostBinding,
	Input,
	OnInit,
	Renderer2,
} from '@angular/core';
import {FormLabelDirective} from '../../directives/form-label/form-label.directive';
import {FormInputDirective} from '../../directives/form-input/form-input.directive';
import {AbstractControl, NgControl} from "@angular/forms";

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
	formControl: AbstractControl;

	constructor(private renderer: Renderer2) {
	}

	ngOnInit(): void {
	}

	@HostBinding('class')
	get classList(): string {
		return 'form-group';
	}

	ngAfterContentInit(): void {
		console.log(this.formControl);
		this.renderer.setAttribute(this.label?.nativeElement, 'for', this.id);
		this.renderer.setAttribute(this.input?.nativeElement, 'id', this.id);
	}

}
