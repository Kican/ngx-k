import {Component, Injector, OnInit} from '@angular/core';
import {ComponentBase, ISelectComponent} from '@ngx-k/form-builder';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpSelectDataProvider} from '@ngx-k/components/select';

@Component({
	selector: 'lib-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent extends ComponentBase<ISelectComponent> implements OnInit {
	control: FormControl;
	dataProvider: HttpSelectDataProvider<any>;

	constructor(injector: Injector, private httpClient: HttpClient) {
		super(injector);
		this.control = new FormControl(null);
		this.setControlValidators(this.control, this.config.data.validators);

		this.dataProvider = new HttpSelectDataProvider<any>(httpClient, this.config.data.fetchUrl);
	}

	ngOnInit(): void {
		this.config.form.addControl(this.toLowerCamelCase(this.config.data.name), this.control);
		this.dataProvider.typeHead$.next('');
	}
}
