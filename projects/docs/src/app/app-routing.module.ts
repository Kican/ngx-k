import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimpleFormBuilderPageComponent} from './components/_form-builder/simple-form-builder-page/simple-form-builder-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';


const routes: Routes = [
	{path: '', component: DashboardPageComponent},
	{path: 'form-builder', component: SimpleFormBuilderPageComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
