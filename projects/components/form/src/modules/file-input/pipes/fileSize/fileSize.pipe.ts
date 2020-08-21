import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

	transform(value: number, ...args: unknown[]): string {
		if (value < 1000000)
			return Math.ceil(value / 1024) + 'KB';
		else
			return Math.ceil(value / (1024 * 1024)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'MB';
	}

}
