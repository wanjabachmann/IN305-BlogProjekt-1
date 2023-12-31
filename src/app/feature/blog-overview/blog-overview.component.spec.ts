import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewComponent } from './blog-overview.component';

describe('BlogOverviewComponent', () => {
  let component: BlogOverviewComponent;
  let fixture: ComponentFixture<BlogOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogOverviewComponent],
    });
    fixture = TestBed.createComponent(BlogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
