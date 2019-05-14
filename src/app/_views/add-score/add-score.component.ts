import { ScoreService } from './../../_services/score.service';
import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/_models/score';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.scss']
})
export class AddScoreComponent implements OnInit {

  score: Score = new Score('', '', 0, 0);

  constructor(private scoreService: ScoreService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitAddScore() {
    this.scoreService.createScore(this.score).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/scoreboard'])
      }
    );
  }
}
