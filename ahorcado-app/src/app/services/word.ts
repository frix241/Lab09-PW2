import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private words: string[] = [
    'Angular', 'Computadora', 'Monitor', 'Compilacion',
    'Ahorcado', 'Laboratorio', 'Gato', 'Perro', 'Diccionario'
  ];

  constructor() { }

  getRandomWord(): string {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index].toLowerCase();
  }
}
