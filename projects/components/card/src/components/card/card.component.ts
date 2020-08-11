import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

@Component({
	selector: 'k-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

	@HostBinding('class')
	get classList(): string {
		return 'card';
	}

}
