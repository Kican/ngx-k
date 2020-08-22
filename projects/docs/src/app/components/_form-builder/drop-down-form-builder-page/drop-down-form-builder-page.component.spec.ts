import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropDownFormBuilderPageComponent} from './drop-down-form-builder-page.component';

describe('DropDownFormBuilderPageComponent', () => {
	let component: DropDownFormBuilderPageComponent;
	let fixture: ComponentFixture<DropDownFormBuilderPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DropDownFormBuilderPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DropDownFormBuilderPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
