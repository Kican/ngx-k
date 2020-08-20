import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileSaverService} from '@ngx-k/components/core';

@Component({
	selector: 'k-form-file-previous-list',
	templateUrl: './form-file-previous-list.component.html',
	styleUrls: ['./form-file-previous-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFilePreviousListComponent implements OnInit {

	@Input()
	previousFilesUrl: string[];

	constructor(
		private http: HttpClient,
		private fileSaver: FileSaverService
	) {
	}

	fileName(url: string): string {
		return url.substring(url.lastIndexOf('/') + 1, url.length);
	}

	ngOnInit(): void {
	}

	saveFile(url: string): void {
		this.http.get(url, {responseType: 'blob'}).subscribe(value => {
			this.fileSaver.saveFile(value, this.fileName(url));
		});
	}

}
