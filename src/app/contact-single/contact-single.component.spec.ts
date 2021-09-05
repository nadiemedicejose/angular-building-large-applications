import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSingleComponent } from './contact-single.component';

describe('ContactSingleComponent', () => {
  let component: ContactSingleComponent;
  let fixture: ComponentFixture<ContactSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
