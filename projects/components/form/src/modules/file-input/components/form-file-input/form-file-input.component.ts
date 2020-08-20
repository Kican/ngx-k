import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FileInputTmpDirective} from '../../directives/file-input-tmp/file-input-tmp.directive';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'k-form-file-input',
	templateUrl: './form-file-input.component.html',
	styleUrls: ['./form-file-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormFileInputComponent),
			multi: true
		}
	]
})
export class FormFileInputComponent implements OnInit, ControlValueAccessor {
	@HostBinding('class.disabled')
	@Input()
	disabled = false;

	onChange = (filesName: string) => {
	};
	onTouched = () => {
	};

	get value(): string {
		return this.filesAsArray ? this.filesAsArray.map(file => file.name).join(',') : null;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	writeValue(obj: any): void {
		this.onChange(obj);
	}

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
	previousFilesText = 'Previous files';

	@Input()
	selectedCountText = 'item selected';

	@Input()
	typeText = 'type';

	@Input()
	sizeText = 'size';

	@Input()
	files: FileList;

	@Output()
	filesChange = new EventEmitter<FileList>();

	constructor() {
	}

	ngOnInit(): void {
	}

	fileChangeHandler($event): void {
		this.files = $event.target.files;
		this.filesChange.next(this.files);
		this.writeValue(this.value);
	}

	get filesAsArray(): File[] {
		return this.files ? Array.from(this.files) : [];
	}

	clear(): void {
		this.clearInput();
		this.files = null;
		this.filesChange.next(this.files);
		this.writeValue(this.value);
	}

	private clearInput(): void {
		this.input.nativeElement.value = '';
		if (this.input.nativeElement.value)
			try {
				this.input.nativeElement.type = 'text';
				this.input.nativeElement.type = 'file';
			} catch (e) {
			}
	}
}
