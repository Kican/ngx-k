import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'data-table-count',
	templateUrl: './data-table-count.component.html',
	styleUrls: ['./data-table-count.component.scss']
})
export class DataTableCountComponent implements OnInit {
	@Output()
	valueChange = new EventEmitter<number>();

	count = new FormControl([8]);

	items: number[] = [8, 16, 32];

	constructor() {
	}

	ngOnInit(): void {
		this.count.valueChanges.subscribe(value => {
			this.valueChange.emit(value);
		});

		this.count.patchValue(this.items[0]);
	}

}
