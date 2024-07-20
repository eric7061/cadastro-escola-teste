import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddClassComponent } from './input-add-class.component';

describe('InputAddClassComponent', () => {
  let component: InputAddClassComponent;
  let fixture: ComponentFixture<InputAddClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAddClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
