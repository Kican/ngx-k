import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'data-table-pagination',
	templateUrl: './data-table-pagination.component.html',
	styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent implements OnInit {
	@Input()
	totalItems: number;

	@Input()
	itemPerPage: number;

	@Input()
	currentItems: number;

	@Output()
	valueChanges = new EventEmitter<number>();

	currentPage: number = 1;

	constructor() {
	}

	get paginationDescription(): string {
		const start = ((this.currentPage - 1) * this.itemPerPage + 1);
		return this.currentItems ?
			`نمایش $start تا $end از $total رکورد`
				.replace('$start', start.toString())
				.replace('$end', (start + this.currentItems - 1).toString())
				.replace('$total', (this.totalItems) + '')
			: '';
	}

	pageChanged($event): void {
		this.valueChanges.next($event);
	}

	ngOnInit(): void {
		this.valueChanges.next(1);
	}
}
