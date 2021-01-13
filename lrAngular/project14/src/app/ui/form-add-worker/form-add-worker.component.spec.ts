import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormAddWorkerComponent} from './form-add-worker.component';

describe('FormAddWorkerComponent', () => {
  let component: FormAddWorkerComponent;
  let fixture: ComponentFixture<FormAddWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddWorkerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
