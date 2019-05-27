export class Score {
    public id?: number;
    public player1: string;
    public player2: string;
    public score1: number;
    public score2: number;

    public constructor(player1: string, player2: string, score1: number, score2: number) {
      this.player1 = player1;
      this.player2 = player2;
      this.score1 = score1;
      this.score2 = score2;
    }
  }

