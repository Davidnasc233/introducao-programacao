import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './app/src/app/shared/navbar/navbar';
import { Footer } from './app/src/app/shared/footer/footer';
import { LandingPage } from './app/src/app/components/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('trilha-programacao');
}
