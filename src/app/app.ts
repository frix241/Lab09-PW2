import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'JuegoAhorcado';
  words: string[] = ['Gato', 'Ahorcado', 'Diccionario', 'Perro', 'Laboratorio', '                    Computadora', 'Compilacion', 'Monitor'];
  selectedWord :string | null = null;
  letters: string[] = [];
  guessedLetter: string[] = [];
  tries: number = 6;
  gameOver: boolean = false;

  getWord() {
    const randIndex = Math.floor(Math.random() * this.words.length);
    this.selectedWord = this.words[randIndex];
    this.letters = this.selectedWord.split('');
    this.guessedLetter = [];
    this.gameOver = false;
  }
    

  updateWord(){
    this.getWord();
  }
}
