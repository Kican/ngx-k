import {Directive, TemplateRef} from '@angular/core';

@Directive({
	selector: '[kFileInputTmp]'
})
export class FileInputTmpDirective {
	constructor(public templateRef: TemplateRef<any>) {
	}
}
