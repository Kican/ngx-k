import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormFilePreviousListComponent} from './_partials/form-file-previous-list/form-file-previous-list.component';
import {FormFileListComponent} from './_partials/form-file-list/form-file-list.component';
import {FormFileInputComponent} from './components/form-file-input/form-file-input.component';
import {FileSizePipe} from './pipes/fileSize/fileSize.pipe';
import {FileTypePipe} from './pipes/file-type/file-type.pipe';
import { FileInputTmpDirective } from './directives/file-input-tmp/file-input-tmp.directive';


@NgModule({
	declarations: [
		FormFileInputComponent,
		FormFileListComponent,
		FormFilePreviousListComponent,
		FileSizePipe,
		FileTypePipe,
		FileInputTmpDirective,
	],
	exports: [
		FormFileInputComponent,
		FileInputTmpDirective,
	],
	imports: [
		CommonModule
	]
})
export class FileInputModule {
}
