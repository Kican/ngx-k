import {Component, HostBinding} from '@angular/core';

@Component({
	selector: 'k-card-body',
	templateUrl: './card-body.component.html',
	styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent {

	@HostBinding('class')
	get classList(): string {
		return 'card-body';
	}

}
