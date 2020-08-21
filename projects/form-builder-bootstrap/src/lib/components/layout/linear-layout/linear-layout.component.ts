import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver, Inject, Injector,
	Input,
	OnInit, StaticProvider, Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import {FormBuilderService, COMPONENT_DATA, IComponent, ILinearLayoutComponent, ComponentConfig} from '@ngx-k/form-builder';

@Component({
	selector: 'k-linear-layout',
	templateUrl: './linear-layout.component.html',
	styleUrls: ['./linear-layout.component.scss']
})
export class LinearLayoutComponent implements OnInit, AfterViewInit {
	@ViewChild('content', {read: ViewContainerRef, static: true})
	dynamicInsert: ViewContainerRef;

	constructor(
		@Inject(COMPONENT_DATA) public config: ComponentConfig<ILinearLayoutComponent>,
		private formBuilder: FormBuilderService,
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector
	) {
		this.data = config.data;
	}

	data: ILinearLayoutComponent;
	components: { component: Type<any>, injector: Injector }[] = [];

	ngAfterViewInit(): void {
	}

	ngOnInit(): void {
		if (this.data.orientation == 'vertical') {
			for (const child of this.data.children) {
				this.formBuilder.render(child, this.config.form, this.dynamicInsert, this.componentFactoryResolver, this.injector);
			}
		} else {
			for (const child of this.data.children) {
				const cmp = this.formBuilder.resolve(child, this.config.form, this.componentFactoryResolver, this.injector);
				this.components.push({injector: cmp.injector, component: cmp.componentType});
			}
		}
	}
}
