import {Component, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LayoutComponentBase, ILinearLayoutComponent} from '@ngx-k/form-builder';

@Component({
	selector: 'k-linear-layout',
	templateUrl: './linear-layout.component.html',
	styleUrls: ['./linear-layout.component.scss']
})
export class LinearLayoutComponent extends LayoutComponentBase<ILinearLayoutComponent> implements OnInit {
	@ViewChild('content', {read: ViewContainerRef, static: true})
	dynamicInsert: ViewContainerRef;

	constructor(
		protected injector: Injector
	) {
		super(injector);
		this.data = this.config.data;
	}

	data: ILinearLayoutComponent;

	ngOnInit(): void {
		if (this.data.orientation == 'vertical') {
			for (const child of this.data.children) {
				this.formBuilder.render(child, this.config.form, this.dynamicInsert, this.componentFactoryResolver, this.injector);
			}
		}

		super.ngOnInit();
	}
}
