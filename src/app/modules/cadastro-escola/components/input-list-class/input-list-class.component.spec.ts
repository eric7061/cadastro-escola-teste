import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListClassComponent } from './input-list-class.component';

describe('InputListClassComponent', () => {
  let component: InputListClassComponent;
  let fixture: ComponentFixture<InputListClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputListClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputListClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
