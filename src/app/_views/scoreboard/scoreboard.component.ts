import { ScoreService } from './../../_services/score.service';
import { Score } from './../../_models/score';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scoreToEdit: Subject<Score> = new Subject<Score>();
  scores: Score[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    this.scoreService.getScores().subscribe(
      data => this.scores = data.reverse()
    );
  }

  saveScore(score: Score) {
    this.scoreService.updateScore(score).subscribe(
      () => {
        this.getScores();
      }
    );
  }

  editScore(score: Score) {
    this.scoreToEdit.next(score);
  }

}
