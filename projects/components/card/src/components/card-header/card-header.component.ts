import {Component, HostBinding} from '@angular/core';

@Component({
	selector: 'k-card-header',
	templateUrl: './card-header.component.html',
	styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {

	@HostBinding('class')
	get classList(): string {
		return 'card-header';
	}

}
