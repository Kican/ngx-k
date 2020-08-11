import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../models/user-dto';
import {ChangePassword} from '../models/change-password.model';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {NewPassWithToken} from '../models/new-pass-with-token.model';

@Injectable({
	providedIn: 'root'
})
export class NgxKAccountService {
	user$ = new BehaviorSubject<UserDto>(null);

	constructor(private http: HttpClient) {
	}

	info(): Observable<UserDto> {
		return this.http.get<UserDto>('api/Account/Info');
	}

	changePassword(data: ChangePassword): Observable<any> {
		return this.http.post('api/Account/ChangePassword', data);
	}

	uploadAvatar(file: File): Observable<HttpEvent<any>> {
		const form = new FormData();
		form.append('file', file, file.name);
		const request = new HttpRequest('POST', 'api/Account/uploadAvatar', form, {reportProgress: true});
		return this.http.request(request);
	}

	forgotPassword(username: string): Observable<any> {
		return this.http.get('api/Account/ForgotPassword/' + username);
	}

	newPassword(data: NewPassWithToken): Observable<any> {
		return this.http.post('api/Account/NewPassword', data);
	}
}
