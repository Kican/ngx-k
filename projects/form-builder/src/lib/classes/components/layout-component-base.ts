import {ILayoutComponent} from './layout/ilayout-component';
import {ComponentBase} from './component-base';
import {ComponentFactoryResolver, Injector, OnInit, Type} from '@angular/core';
import {FormBuilderService} from '../../services/form-builder.service';

export abstract class LayoutComponentBase<T extends ILayoutComponent = ILayoutComponent> extends ComponentBase<T> implements OnInit {
	protected componentFactoryResolver: ComponentFactoryResolver;
	protected formBuilder: FormBuilderService;
	components: { component: Type<any>, injector: Injector }[] = [];

	protected constructor(protected injector: Injector) {
		super(injector);
		this.componentFactoryResolver = injector.get(ComponentFactoryResolver);
		this.formBuilder = injector.get(FormBuilderService);
	}

	ngOnInit(): void {
		for (const child of this.config.data.children) {
			const cmp = this.formBuilder.resolve(child, this.config.form, this.componentFactoryResolver, this.injector);
			this.components.push({injector: cmp.injector, component: cmp.componentType});
		}
	}
}
