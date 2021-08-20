import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-evaluation',
  templateUrl: './program-evaluation.component.html',
  styleUrls: ['./program-evaluation.component.scss']
})
export class ProgramEvaluationComponent implements OnInit {

  evaluationForm ;
  isLinear= false

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.evaluationForm = this._fb.group({
      infosPersonellesGroup : this._fb.group({
        cin : ['', Validators.required],
        nom : ['', Validators.required],
        prenom : ['', Validators.required],
        dateNaissance : ['', Validators.required],
        lieuNaissance : ['', Validators.required],
      }),
      etatCivilGroup : this._fb.group({
        nec : ['', Validators.required],
        situationFamilliale : ['', Validators.required],
      }),
      questionnaire1 : this._fb.group({
        variable1 : ['', Validators.required],
        variable2 : ['', Validators.required],
        variable3 : ['', Validators.required],
        variable4 : ['', Validators.required],
        variable5 : ['', Validators.required],
      }),
      questionnaire2 : this._fb.group({
        variable1 : ['', Validators.required],
        variable2 : ['', Validators.required],
        variable3 : ['', Validators.required],
        variable4 : ['', Validators.required],
        variable5 : ['', Validators.required],
      })
    })
  }

  submit() : void {

  }

}
