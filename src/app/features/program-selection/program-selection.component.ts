import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgramEvaluationComponent } from '../program-evaluation/program-evaluation.component';

@Component({
  selector: 'app-program-selection',
  templateUrl: './program-selection.component.html',
  styleUrls: ['./program-selection.component.scss']
})
export class ProgramSelectionComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  programs = [
    {
      title : "RAMED",
      description : ""
    },
    {
      title : "DAAM",
      description : ""
    },
    {
      title : "TAYSSIR",
      description : ""
    },
    {
      title : "Aides Scolaires",
      description : ""
    },
    {
      title : "Aides aux veuves",
      description : ""
    },
  ]

  ngOnInit(): void {
  }

  ProgramEvaluation() {

    this.dialog.open(ProgramEvaluationComponent, {
      data : null,
      width : "80%",
      autoFocus : true,
      disableClose : true
    })
  }

}
