import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageNotFoundPageComponent } from './error-page-not-found-page.component';

describe('ErrorPageNotFoundPageComponent', () => {
  let component: ErrorPageNotFoundPageComponent;
  let fixture: ComponentFixture<ErrorPageNotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageNotFoundPageComponent],
    });
    fixture = TestBed.createComponent(ErrorPageNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
