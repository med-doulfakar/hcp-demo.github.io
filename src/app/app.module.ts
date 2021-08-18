import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/modules/angular-material/angular-material.module';
import { ProgramSelectionComponent } from './features/program-selection/program-selection.component';
import { ProgramEvaluationComponent } from './features/program-evaluation/program-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramSelectionComponent,
    ProgramEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
