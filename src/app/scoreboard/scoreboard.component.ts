import { ScoreService } from './../_services/score.service';
import { Score } from './../_models/score';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scores: Score[] = [];

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.scoreService.getScores().subscribe(
      data => this.scores = data
    )
  }
  
}
