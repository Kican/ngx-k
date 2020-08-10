import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
	selector: 'k-table-body',
	templateUrl: './table-body.component.html',
	styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

	@HostBinding('class')
	get classList(): string {
		return 'table-responsive';
	}

	constructor() {
	}

	ngOnInit(): void {
	}

}
