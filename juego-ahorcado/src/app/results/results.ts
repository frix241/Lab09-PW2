import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class Results implements OnInit {
  result: string = '';
  word: string = '';
  isWin: boolean = false;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.result = params['result'] || '';
      this.word = params['word'] || '';
      this.isWin = this.result === 'win';
    });
  }

  get resultTitle(): string {
    return this.isWin ? '¡Felicidades!' : '¡Oh no!';
  }

  get resultMessage(): string {
    return this.isWin 
      ? '¡Has ganado el juego del ahorcado!' 
      : '¡Mejor suerte la próxima vez!';
  }

  get resultIcon(): string {
    return this.isWin ? '🏆' : '💀';
  }

  get resultEmoji(): string {
    return this.isWin ? '🎉🎊🥳' : '😔💔😞';
  }

  playAgain(): void {
    this.router.navigate(['/game']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}