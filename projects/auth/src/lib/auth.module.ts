import {NgModule} from '@angular/core';
import {AuthHttpInterceptor} from './providers/auth-http.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
	declarations: [],
	imports: [],
	exports: [],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
	]
})
export class AuthModule {
}
