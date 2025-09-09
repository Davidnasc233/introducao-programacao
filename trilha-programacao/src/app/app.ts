import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './src/app/shared/navbar/navbar';
import { Footer } from './src/app/shared/footer/footer';
import { LandingPage } from './src/app/components/landing-page/landing-page';
import { Roads } from './src/app/components/roads/roads';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, LandingPage, Roads],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('trilha-programacao');
}
