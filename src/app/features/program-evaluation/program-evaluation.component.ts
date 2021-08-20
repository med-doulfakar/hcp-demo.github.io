import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-program-evaluation',
  templateUrl: './program-evaluation.component.html',
  styleUrls: ['./program-evaluation.component.scss'],
})
export class ProgramEvaluationComponent implements OnInit {
  evaluationForm;
  isLinear = false;

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.evaluationForm = this._fb.group({
      infosPersonellesGroup: this._fb.group({
        cin: [''],
        nom: [''],
        prenom: [''],
        dateNaissance: [''],
        lieuNaissance: [''],
      }),
      etatCivilGroup: this._fb.group({
        nec: [''],
        situationFamilliale: [''],
      }),
      questionnaire1: this._fb.group({
        variable1: [''],
        variable2: [''],
        variable3: [''],
        variable4: [''],
        variable5: [''],
      }),
      questionnaire2: this._fb.group({
        variable1: [''],
        variable2: [''],
        variable3: [''],
        variable4: [''],
        variable5: [''],
      }),
    });
  }

  submit(): void {}
}
