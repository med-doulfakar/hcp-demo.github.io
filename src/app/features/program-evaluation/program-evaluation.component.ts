import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
  isCalculating = false;

  userInfo={cin : '', nom : '', prenom :'' , dateNaissance : '', lieuNaissance : ''}
  etatCivil = {nec : '', situationFamilliale : ''}

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
        cin: ['' , [Validators.required]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        dateNaissance: ['', [Validators.required]],
        lieuNaissance: ['', [Validators.required]],
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
      pjs: this._fb.group({
        cin: [''],
        residence: [''],
      }),
    });
  }

  score;
  getScore(): number {
    return Math.floor(Math.random() * (100 - 0) + 0);
  }


  submit(): void {
    this.isCalculating = true;
    setTimeout(() => {
      this.isCalculating = false;
      this.score = this.getScore();
    }, 8000);
  }


  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(ev) {
    this.prepareFilesList(ev.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
