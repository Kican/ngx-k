import {
	Component,
	ComponentFactoryResolver,
	Injector, Input, OnChanges,
	OnInit,
	ViewChild,
	ViewContainerRef,
	SimpleChanges, ChangeDetectorRef
} from '@angular/core';
import {IComponent} from '../../classes';
import {FormBuilderService} from '../../services/form-builder.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'k-form-builder',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit, OnChanges {

	@ViewChild('content', {read: ViewContainerRef})
	dynamicInsert: ViewContainerRef;

	@Input()
	component: IComponent;

	@Input()
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilderService,
		private cdRef: ChangeDetectorRef,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.dynamicInsert != null) {
			this.dynamicInsert.clear();
			this.formBuilder.render(this.component, this.form, this.dynamicInsert, this.componentFactoryResolver, this.injector);
			this.cdRef.detectChanges();
		}
	}

	ngOnInit(): void {
	}

}
