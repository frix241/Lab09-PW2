import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private words = [
    'ANGULAR',
    'TYPESCRIPT',
    'JAVASCRIPT',
    'PROGRAMACION',
    'DESARROLLO',
    'FRONTEND',
    'BACKEND',
    'COMPONENTE',
    'SERVICIO',
    'DIRECTIVA',
    'MODULO',
    'ROUTING',
    'BOOTSTRAP',
    'RESPONSIVE',
    'FRAMEWORK',
    'APLICACION',
    'TECNOLOGIA',
    'SOFTWARE',
    'ALGORITMO',
    'VARIABLE'
  ];

  private currentWord: string = '';
  private guessedLetters: string[] = [];
  private wrongGuesses: number = 0;
  private maxWrongGuesses: number = 6;

  // Obtener una palabra aleatoria
  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
    return this.currentWord;
  }

  // Iniciar nuevo juego
  startNewGame(): void {
    this.currentWord = this.getRandomWord();
    this.guessedLetters = [];
    this.wrongGuesses = 0;
  }

  // Adivinar una letra
  guessLetter(letter: string): boolean {
    letter = letter.toUpperCase();

    if (this.guessedLetters.includes(letter)) {
      return false; // Ya fue adivinada
    }

    this.guessedLetters.push(letter);

    if (this.currentWord.includes(letter)) {
      return true; // Letra correcta
    } else {
      this.wrongGuesses++;
      return false; // Letra incorrecta
    }
  }

  // Obtener palabra con letras adivinadas
  getDisplayWord(): string {
    return this.currentWord
      .split('')
      .map(letter => this.guessedLetters.includes(letter) ? letter : '_')
      .join(' ');
  }

  // Verificar si el juego terminó (ganó)
  isGameWon(): boolean {
    return this.currentWord
      .split('')
      .every(letter => this.guessedLetters.includes(letter));
  }

  // Verificar si el juego terminó (perdió)
  isGameLost(): boolean {
    return this.wrongGuesses >= this.maxWrongGuesses;
  }

  // Obtener letras adivinadas
  getGuessedLetters(): string[] {
    return this.guessedLetters;
  }

  // Obtener número de errores
  getWrongGuesses(): number {
    return this.wrongGuesses;
  }

  // Obtener máximo de errores permitidos
  getMaxWrongGuesses(): number {
    return this.maxWrongGuesses;
  }

  // Obtener palabra actual (para mostrar al final)
  getCurrentWord(): string {
    return this.currentWord;
  }
}
