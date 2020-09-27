import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimpleFormBuilderPageComponent} from './components/_form-builder/simple-form-builder-page/simple-form-builder-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {DataTablePageComponent} from './components/data-table-page/data-table-page.component';


const routes: Routes = [
	{path: '', component: DashboardPageComponent},
	{path: 'form-builder', component: SimpleFormBuilderPageComponent},
	{path: 'data-table', component: DataTablePageComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
