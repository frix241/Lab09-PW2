import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GameComponent } from './pages/game/game.component';
import { ResultComponent } from './pages/result/result';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'result', component: ResultComponent }
];
