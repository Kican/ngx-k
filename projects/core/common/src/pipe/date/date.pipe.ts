import {Inject, Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import {DOCUMENT} from '@angular/common';

@Pipe({
	name: 'k-date'
})
export class DatePipe implements PipeTransform {
	constructor(@Inject(DOCUMENT) public document: Document) {
	}

	transform(value: string, format: 'short' | 'long' | string = 'short'): unknown {
		dayjs.extend(jalaliday);

		let _format = format;
		switch (format) {
			case 'long':
				_format = 'YYYY MMMM DD - hh:mm';
				break;
			case 'short':
				_format = 'YYYY/MM/DD - hh:mm';
		}
		const calender = this.document.documentElement.lang === 'fa' ? 'jalali' : 'gregory';

		return dayjs(value).calendar(calender).format(_format);
	}

}
