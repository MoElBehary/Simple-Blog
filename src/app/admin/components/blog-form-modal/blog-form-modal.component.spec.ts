import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormModalComponent } from './blog-form-modal.component';

describe('BlogFormModalComponent', () => {
  let component: BlogFormModalComponent;
  let fixture: ComponentFixture<BlogFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
