import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataTableOptions, DtDataSource, ItemsDataSource} from '@ngx-k/components/data-table';
import {IComponent} from '@ngx-k/form-builder';

@Component({
	selector: 'app-data-table-page',
	templateUrl: './data-table-page.component.html',
	styleUrls: ['./data-table-page.component.scss']
})
export class DataTablePageComponent implements OnInit {
	dataSource: DtDataSource<any>;
	displayedColumns: string[] = ['id', 'title', 'options'];

	dtConfig = new DataTableOptions();

	filterForm: FormGroup;
	fields: IComponent[];

	pageChanged($event): void {
		console.log($event);
		this.valueChanges.next($event);
	}

	@Input()
	totalItems: number = 100;

	@Input()
	itemPerPage: number = 8;

	@Input()
	currentItems: number = 8;

	@Output()
	valueChanges = new EventEmitter<number>();

	currentPage: number = 1;

	items: { id: number, title: string }[] = [];

	constructor() {
		this.fields = JSON.parse('[{"editable":false,"title":"کد","validators":[],"type":"NumberFieldComponent","name":"id"},{"editable":false,"title":"عنوان","validators":[],"type":"TextFieldComponent","name":"title"},{"editable":false,"title":"فرودگاه","validators":[],"type":"TextFieldComponent","name":"AirportTitle"},{"editable":false,"title":"شهر","validators":[],"type":"TextFieldComponent","name":"CityTitle"}]');

		for (let i = 0; i < 100; i++) {
			this.items.push({id: i + 1, title: 'asdasd ' + i});
		}
		this.dataSource = new ItemsDataSource<any>(this.items, this.filterForm);
	}

	ngOnInit(): void {
	}

	toLowerCamelCase(text: string): string {
		return text.substring(0, 1).toLowerCase() + text.substring(1);
	}
}
