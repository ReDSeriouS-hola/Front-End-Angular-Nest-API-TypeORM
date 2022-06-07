import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoUpdateComponent } from './contacto-update.component';

describe('ContactoUpdateComponent', () => {
  let component: ContactoUpdateComponent;
  let fixture: ComponentFixture<ContactoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
