import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HangmanService } from '../services/hangman';
@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game implements OnInit {
  displayWord = '';
  guessedLetters: string[] = [];
  wrongGuesses = 0;
  maxWrongGuesses = 6;
  gameOver = false;
  gameWon = false;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(private hangmanService: HangmanService, private router: Router) {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.hangmanService.startNewGame();
    this.updateState();
    this.gameOver = false;
    this.gameWon = false;
  }

  guess(letter: string): void {
    if (this.gameOver) return;

    const correct = this.hangmanService.guessLetter(letter);
    this.updateState();

    if (this.hangmanService.isGameWon()) {
      this.router.navigate(['/result'], {
        state: {
          won: true,
          word: this.hangmanService.getCurrentWord()
        }
      });
    } else if (this.hangmanService.isGameLost()) {
      this.router.navigate(['/result'], {
        state: {
          won: false,
          word: this.hangmanService.getCurrentWord()
        }
      });
    }
  }

  updateState(): void {
    this.displayWord = this.hangmanService.getDisplayWord();
    this.guessedLetters = this.hangmanService.getGuessedLetters();
    this.wrongGuesses = this.hangmanService.getWrongGuesses();
    this.maxWrongGuesses = this.hangmanService.getMaxWrongGuesses();
  }

  isLetterDisabled(letter: string): boolean {
    return this.guessedLetters.includes(letter);
  }
}
