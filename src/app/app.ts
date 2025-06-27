import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'JuegoAhorcado';
  words: string[] = ['Gato', 'Ahorcado', 'Diccionario', 'Perro', 'Laboratorio', '                    Computadora', 'Compilacion', 'Monitor'];
  selectedWord :string | null = null;

  getWord() {
    const randIndex = Math.floor(Math.random() * this.words.length);
    this.selectedWord = this.words[randIndex];
  }
    

  updateWord(){
    this.getWord();
  }
}
