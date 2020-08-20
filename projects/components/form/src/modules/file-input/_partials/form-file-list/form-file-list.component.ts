import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FileSaverService} from '@ngx-k/components/core';

@Component({
	selector: 'k-form-file-list',
	templateUrl: './form-file-list.component.html',
	styleUrls: ['./form-file-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFileListComponent implements OnInit {
	@Input()
	files: File[];

	@Input()
	typeText;

	@Input()
	sizeText;

	constructor(private fileSaver: FileSaverService) {
	}

	ngOnInit(): void {
	}

	saveFile(file, fileName): void {
		this.fileSaver.saveFile(file, fileName);
	}

}
