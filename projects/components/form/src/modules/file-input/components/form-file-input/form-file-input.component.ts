import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FileInputTmpDirective} from "../../directives/file-input-tmp/file-input-tmp.directive";

@Component({
	selector: 'k-form-file-input',
	templateUrl: './form-file-input.component.html',
	styleUrls: ['./form-file-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFileInputComponent implements OnInit {
	@ViewChild('input', {static: true})
	input: ElementRef<HTMLInputElement>;

	@ContentChild(FileInputTmpDirective, {static: true, read: TemplateRef})
	inputTemplate: TemplateRef<any>;

	@Input()
	multiple: boolean;

	@Input()
	accept: string;

	@Input()
	previousFilesUrl: string[];

	@Input()
	files: File[];

	@Output()
	filesChange = new EventEmitter<File[]>();

	constructor() {
	}

	ngOnInit(): void {
	}

	fileChangeHandler($event): void {
		this.files = Array.from($event.target.files);
		this.filesChange.next(this.files);
	}

	clear(): void {
		this.input.nativeElement.value = '';
		this.files = [];
		this.filesChange.next(this.files);
	}

}
