import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

@Component({
	selector: 'k-card-footer',
	templateUrl: './card-footer.component.html',
	styleUrls: ['./card-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFooterComponent {

	@HostBinding('class')
	get classList(): string {
		return 'card-footer';
	}

}
