import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Score } from 'src/app/_models/score';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.scss']
})
export class EditScoreComponent implements OnInit {

  editScoreForm: FormGroup;

  player1: FormControl;
  player2: FormControl;
  score1: FormControl;
  score2: FormControl;

  @Input() scoreObservable: Observable<Score>;
  @Output() editEvent: EventEmitter<Score> = new EventEmitter();

  score: Score;

  constructor() { }

  ngOnInit() {
    this.scoreObservable.subscribe(
      data => {
        this.score = data;
        this.createFormControls();
        this.createForm();
      }
    )
  }

  createFormControls() {
    this.player1 = new FormControl(this.score.player1, [Validators.required]);
    this.player2 = new FormControl(this.score.player2, [Validators.required]);
    this.score1 = new FormControl(this.score.score1, [Validators.required]);
    this.score2 = new FormControl(this.score.score2, [Validators.required]);
  }

  createForm() {
    this.editScoreForm = new FormGroup({
      player1: this.player1,
      player2: this.player2,
      score1: this.score1,
      score2: this.score2
    })
  }

  onSubmitEditScore() {
    const tmpScore = new Score(
      this.player1.value,
      this.player2.value,
      this.score1.value,
      this.score2.value
    )
    tmpScore.id = this.score.id;
    this.editEvent.emit(tmpScore);
    this.editScoreForm = undefined;
  }

}
