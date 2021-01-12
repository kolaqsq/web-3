import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormRedactWorkerComponent} from './form-redact-worker.component';

describe('FormRedactWorkerComponent', () => {
  let component: FormRedactWorkerComponent;
  let fixture: ComponentFixture<FormRedactWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormRedactWorkerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRedactWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
