import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TemplateMasterPageComponent} from './template-master-page.component';

describe('PageTemplateComponent', () => {
  let component: TemplateMasterPageComponent;
  let fixture: ComponentFixture<TemplateMasterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateMasterPageComponent]
    });
    fixture = TestBed.createComponent(TemplateMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
