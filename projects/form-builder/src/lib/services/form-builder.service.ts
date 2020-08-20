import {AbstractType, ComponentFactoryResolver, ComponentRef, Injectable, InjectFlags, InjectionToken, Injector, Type, ViewContainerRef} from '@angular/core';
import {ComponentCollection, ComponentConfig, ComponentDescriptorCollection, IComponent, IElementComponent} from '../classes';
import {FormGroup} from '@angular/forms';

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
	): ComponentRef<IElementComponent> {
		const componentName = this.componentDescriptorCollection.resolve(component);
		const componentClass = this.componentCollection.find(componentName);

		const componentFactory = componentFactoryResolver.resolveComponentFactory<IElementComponent>(componentClass);

		const config: ComponentConfig = {
			data: component,
			form: formGroup
		};
		const map = new WeakMap();
		map.set(ComponentConfig, config);

		return componentFactory.create(new ComponentInjector(injector, map));
	}
}

export class ComponentInjector implements Injector {
	constructor(
		private _parentInjector: Injector,
		private _additionalTokens: WeakMap<any, any>
	) {
	}

	get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
	get(token: any, notFoundValue?: any): any;
	get(token, notFoundValue?, flags?: InjectFlags): any {
		const value = this._additionalTokens.get(token);

		if (value) return value;

		return this._parentInjector.get<any>(token, notFoundValue);
	}

}
