import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  selectedWord: string = '';
  letters: string[] = [];
  guessedLetters: string[] = [];
  tries: number = 6;
  gameOver: boolean = false;
  allLetters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(private wordService: WordService, private router: Router) {}

  ngOnInit() {
    this.selectedWord = this.wordService.getRandomWord();
    this.letters = this.selectedWord.split('');
    this.guessedLetters = [];
    this.tries = 6;
  }

  guess(letter: string) {
    if (this.guessedLetters.includes(letter) || this.gameOver) return;

    this.guessedLetters.push(letter);

    if (!this.selectedWord.includes(letter)) {
      this.tries--;
    }

    const won = this.letters.every(l => this.guessedLetters.includes(l));
    const lost = this.tries === 0;

    if (won || lost) {
      this.gameOver = true;
      this.router.navigate(['/result'], {
        state: { word: this.selectedWord, won }
      });
    }
  }

  displayMaskedWord(): string {
    return this.letters
      .map(l => (this.guessedLetters.includes(l) ? l : '_'))
      .join(' ');
  }
}
