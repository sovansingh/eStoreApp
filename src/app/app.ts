import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Header } from './components/header/header';
// import { Catnavigation } from './components/catnavigation/catnavigation';
// import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'estoreapp';
}
