import { Score } from './../_models/score';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) {}

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>('http://localhost:3000/scores');
  }

  createScore(score: Score): Observable<Score> {
    return this.http.post<Score>('http://localhost:3000/scores', score);
  }
}
