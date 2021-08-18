import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramEvaluationComponent } from './program-evaluation.component';

describe('ProgramEvaluationComponent', () => {
  let component: ProgramEvaluationComponent;
  let fixture: ComponentFixture<ProgramEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
