import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrls: ['./results.css']
})
export class Results {
  won: boolean = false;
  word: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { won: boolean; word: string };
    if (state) {
      this.won = state.won;
      this.word = state.word;
    }
  }

  playAgain(): void {
    this.router.navigate(['/game']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
}
