import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver, ComponentRef, Injector,
	Input,
	OnInit, Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import {FormBuilderService, IElementComponent, IComponent, ILinearLayoutComponent, ComponentConfig} from '@ngx-k/form-builder';

@Component({
	selector: 'k-linear-layout',
	templateUrl: './linear-layout.component.html',
	styleUrls: ['./linear-layout.component.scss']
})
export class LinearLayoutComponent implements OnInit, IElementComponent, AfterViewInit {
	@ViewChild('content', {read: ViewContainerRef})
	dynamicInsert: ViewContainerRef;

	constructor(
		public config: ComponentConfig<ILinearLayoutComponent>,
		private formBuilder: FormBuilderService,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {
		this.data = config.data;
	}

	data: ILinearLayoutComponent;

	ngAfterViewInit(): void {
		if (this.data.orientation == 'vertical') {
			for (const child of this.data.children) {
				this.formBuilder.render(child, this.config.form, this.dynamicInsert, this.componentFactoryResolver, this.injector);
			}
		}
	}

	getComponent(component: IComponent): Type<any> {
		return this.formBuilder.resolve(component, this.config.form, this.componentFactoryResolver, this.injector).componentType;
	}

	ngOnInit(): void {
	}

}
