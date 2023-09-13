import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHeaderPageComponent } from './body-header-page.component';

describe('BodyHeaderPageComponent', () => {
  let component: BodyHeaderPageComponent;
  let fixture: ComponentFixture<BodyHeaderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyHeaderPageComponent]
    });
    fixture = TestBed.createComponent(BodyHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
