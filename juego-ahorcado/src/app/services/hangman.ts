import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HangmanService {
  private words = [
    "ANGULAR",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "PROGRAMACION",
    "DESARROLLO",
    "FRONTEND",
    "BACKEND",
    "COMPONENTE",
    "SERVICIO",
    "DIRECTIVA",
    "MODULO",
    "ROUTING",
    "BOOTSTRAP",
    "RESPONSIVE",
    "FRAMEWORK",
    "APLICACION",
    "TECNOLOGIA",
    "SOFTWARE",
    "ALGORITMO",
    "VARIABLE",
  ];

  private currentWord: string = "";
  private guessedLetters: string[] = [];
  private wrongGuesses: number = 0;
  private maxWrongGuesses: number = 6;

  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
    return this.currentWord;
  }

  startNewGame(): void {
    this.currentWord = this.getRandomWord();
    this.guessedLetters = [];
    this.wrongGuesses = 0;
  }

  guessLetter(letter: string): boolean {
    letter = letter.toUpperCase();

    if (this.guessedLetters.includes(letter)) {
      return false;
    }

    this.guessedLetters.push(letter);

    if (this.currentWord.includes(letter)) {
      return true;
    } else {
      this.wrongGuesses++;
      return false;
    }
  }

  getDisplayWord(): string {
    return this.currentWord
      .split("")
      .map((letter) => (this.guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  }

  isGameWon(): boolean {
    return this.currentWord
      .split("")
      .every((letter) => this.guessedLetters.includes(letter));
  }

  isGameLost(): boolean {
    return this.wrongGuesses >= this.maxWrongGuesses;
  }

  getGuessedLetters(): string[] {
    return this.guessedLetters;
  }

  getWrongGuesses(): number {
    return this.wrongGuesses;
  }

  getMaxWrongGuesses(): number {
    return this.maxWrongGuesses;
  }

  getCurrentWord(): string {
    return this.currentWord;
  }
}
