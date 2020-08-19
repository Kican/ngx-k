import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

	transform(value: string, ...args: unknown[]): string {
		return value.substring(value.lastIndexOf('.') + 1, value.length);
	}

}
