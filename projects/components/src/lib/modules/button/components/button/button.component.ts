import {Component, Input, OnInit} from '@angular/core';
import {ButtonType} from '../../button-type.enum';

@Component({
	selector: 'k-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	@Input()
	title: string;

	@Input()
	type: ButtonType;

	constructor() {
	}

	ngOnInit(): void {
	}

	getType(): string {
		return ButtonType[this.type];
	}
}
