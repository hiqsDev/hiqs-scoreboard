import { Score } from './../_models/score';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scores: Score[] = [new Score('Alice', 'Bob', 10, 6), new Score('John', 'Jane', 4, 10)];

  constructor() { }

  ngOnInit() {
  }

}
