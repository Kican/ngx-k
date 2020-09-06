import {ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, StaticProvider, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ComponentConfig} from '../config/component-config';
import {COMPONENT_DATA} from '../config/component-data';
import {ComponentCollection} from '../classes/component-collection/component-collection';
import {COMPONENTS_DESCRIPTOR, ComponentsDescriptor} from '../classes/component-descriptor-collection/components-descriptor';
import {IComponent} from '../_components/icomponent';

@Injectable({
	providedIn: 'root'
})
export class FormBuilderService {
	constructor(
		private componentCollection: ComponentCollection,
		@Inject(COMPONENTS_DESCRIPTOR) private componentsDescriptor: ComponentsDescriptor,
	) {
	}

	public render(
		component: IComponent,
		formGroup: FormGroup,
		viewContainerRef: ViewContainerRef,
		componentFactoryResolver: ComponentFactoryResolver,
		injector: Injector
	): void {
		const componentRef = this.resolve(component, formGroup, componentFactoryResolver, injector);

		viewContainerRef.insert(componentRef.hostView);
	}

	public resolve(
		component: IComponent,
		formGroup: FormGroup,
		componentFactoryResolver: ComponentFactoryResolver,
		injector: Injector
	): ComponentRef<any> {
		console.log(this.componentCollection);
		console.log(this.componentsDescriptor);
		const componentName = this.componentsDescriptor.resolve(component);
		const componentClass = this.componentCollection.find(componentName);

		const componentFactory = componentFactoryResolver.resolveComponentFactory<any>(componentClass);

		const config: ComponentConfig = {
			data: component,
			form: formGroup
		};

		const providers: StaticProvider[] = [
			{provide: COMPONENT_DATA, useValue: config},
		];

		return componentFactory.create(Injector.create({providers, parent: injector}));
	}
}
