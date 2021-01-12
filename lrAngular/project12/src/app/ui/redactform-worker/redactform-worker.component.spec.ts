import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RedactformWorkerComponent} from './redactform-worker.component';

describe('RedactformWorkerComponent', () => {
  let component: RedactformWorkerComponent;
  let fixture: ComponentFixture<RedactformWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedactformWorkerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactformWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
