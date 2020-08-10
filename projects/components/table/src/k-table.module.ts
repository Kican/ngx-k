import {NgModule} from '@angular/core';
import {TableContainerComponent} from './components/table-container/table-container.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableBodyComponent } from './components/table-body/table-body.component';


@NgModule({
	declarations: [
		TableContainerComponent,
		TableHeaderComponent,
		TableFooterComponent,
		TableBodyComponent
	],
	exports: [
		TableContainerComponent,
		TableHeaderComponent,
		TableFooterComponent,
		TableBodyComponent
	]
})
export class KTableModule {
}
