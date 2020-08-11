import {NgModule} from '@angular/core';
import {TableContainerComponent} from './components/table-container/table-container.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableDirective } from './directives/table/table.directive';


@NgModule({
	declarations: [
		TableContainerComponent,
		TableHeaderComponent,
		TableFooterComponent,
		TableBodyComponent,
		TableDirective
	],
	exports: [
		TableContainerComponent,
		TableHeaderComponent,
		TableFooterComponent,
		TableBodyComponent,
		TableDirective
	]
})
export class KTableModule {
}
