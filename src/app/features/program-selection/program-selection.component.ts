import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-selection',
  templateUrl: './program-selection.component.html',
  styleUrls: ['./program-selection.component.scss']
})
export class ProgramSelectionComponent implements OnInit {

  constructor() { }

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

}
