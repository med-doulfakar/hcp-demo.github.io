import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/modules/angular-material/angular-material.module';
import { ProgramSelectionComponent } from './features/program-selection/program-selection.component';
import { ProgramEvaluationComponent } from './features/program-evaluation/program-evaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndDirective } from './core/directives/dnd.directive';
import { ProgressComponent } from './core/components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramSelectionComponent,
    ProgramEvaluationComponent,
    DndDirective,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
