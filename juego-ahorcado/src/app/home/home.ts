import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'Juego del Ahorcado';

  constructor(private router: Router) {}

  startGame(): void {
    this.router.navigate(['/game']);
  }
}