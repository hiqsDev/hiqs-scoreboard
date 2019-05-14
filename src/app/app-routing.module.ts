import { AddScoreComponent } from './_views/add-score/add-score.component';
import { ScoreboardComponent } from './_views/scoreboard/scoreboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'add', component: AddScoreComponent },
  { path: '',
    redirectTo: '/scoreboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/scoreboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
