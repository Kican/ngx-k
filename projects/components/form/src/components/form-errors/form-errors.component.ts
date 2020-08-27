import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'k-form-errors',
	templateUrl: './form-errors.component.html',
	styleUrls: ['./form-errors.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorsComponent implements OnInit {
	@Input()
	errors: { [key: string]: any };

	constructor() {
	}

	ngOnInit(): void {
	}

}
