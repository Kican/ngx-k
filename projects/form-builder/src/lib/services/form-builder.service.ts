import {ComponentFactoryResolver, ComponentRef, Injectable, Injector, StaticProvider, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ComponentCollection, ComponentDescriptorCollection} from '../classes';
import {ComponentConfig} from '../config/component-config';
import {COMPONENT_DATA} from '../config/component-data';
import {IComponent} from '../_components';

@Injectable({
	providedIn: 'root'
})
export class FormBuilderService {

	constructor(
		private componentCollection: ComponentCollection,
		private componentDescriptorCollection: ComponentDescriptorCollection,
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
		const componentName = this.componentDescriptorCollection.resolve(component);
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
