import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HangmanService } from '../services/hangman';

@Component({
  selector: 'app-game',
  imports: [CommonModule, FormsModule],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game implements OnInit {
  currentLetter: string = '';
  message: string = '';
  isGameOver: boolean = false;

  constructor(
    private hangmanService: HangmanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hangmanService.startNewGame();
  }

  get displayWord(): string {
    return this.hangmanService.getDisplayWord();
  }

  get wrongGuesses(): number {
    return this.hangmanService.getWrongGuesses();
  }

  get maxWrongGuesses(): number {
    return this.hangmanService.getMaxWrongGuesses();
  }

  get guessedLetters(): string[] {
    return this.hangmanService.getGuessedLetters();
  }

  get hangmanDrawing(): string[] {
    const drawings = [
      '  +---+',
      '  |   |',
      '      |',
      '      |',
      '      |',
      '      |',
      '========='
    ];

    const stages = [
      // 0 errores
      drawings,
      // 1 error - cabeza
      ['  +---+', '  |   |', '  O   |', '      |', '      |', '      |', '========='],
      // 2 errores - cuerpo
      ['  +---+', '  |   |', '  O   |', '  |   |', '      |', '      |', '========='],
      // 3 errores - brazo izquierdo
      ['  +---+', '  |   |', '  O   |', ' /|   |', '      |', '      |', '========='],
      // 4 errores - brazo derecho
      ['  +---+', '  |   |', '  O   |', ' /|\\  |', '      |', '      |', '========='],
      // 5 errores - pierna izquierda
      ['  +---+', '  |   |', '  O   |', ' /|\\  |', ' /    |', '      |', '========='],
      // 6 errores - pierna derecha (completo)
      ['  +---+', '  |   |', '  O   |', ' /|\\  |', ' / \\  |', '      |', '=========']
    ];

    return stages[this.wrongGuesses] || stages[0];
  }

  guessLetter(): void {
    if (!this.currentLetter) {
      this.message = 'Por favor ingresa una letra';
      return;
    }

    if (this.currentLetter.length !== 1) {
      this.message = 'Ingresa solo una letra';
      this.currentLetter = '';
      return;
    }

    if (!/^[A-Za-z]$/.test(this.currentLetter)) {
      this.message = 'Solo se permiten letras';
      this.currentLetter = '';
      return;
    }

    const wasCorrect = this.hangmanService.guessLetter(this.currentLetter);
    
    if (wasCorrect) {
      this.message = '¡Correcto! 🎉';
    } else {
      this.message = 'Letra incorrecta 😞';
    }

    this.currentLetter = '';
    this.checkGameStatus();
  }

  private checkGameStatus(): void {
    if (this.hangmanService.isGameWon()) {
      this.message = '¡Felicidades! ¡Ganaste! 🏆';
      this.isGameOver = true;
      setTimeout(() => {
        this.router.navigate(['/results'], { 
          queryParams: { result: 'win', word: this.hangmanService.getCurrentWord() }
        });
      }, 2000);
    } else if (this.hangmanService.isGameLost()) {
      this.message = `¡Perdiste! 💀 La palabra era: ${this.hangmanService.getCurrentWord()}`;
      this.isGameOver = true;
      setTimeout(() => {
        this.router.navigate(['/results'], { 
          queryParams: { result: 'lose', word: this.hangmanService.getCurrentWord() }
        });
      }, 3000);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.guessLetter();
    }
  }

  newGame(): void {
    this.hangmanService.startNewGame();
    this.message = '';
    this.isGameOver = false;
    this.currentLetter = '';
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}