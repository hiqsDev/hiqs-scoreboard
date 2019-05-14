import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './_views/scoreboard/scoreboard.component';
import { AddScoreComponent } from './_views/add-score/add-score.component';
import { EditScoreComponent } from './_views/edit-score/edit-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    AddScoreComponent,
    EditScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
