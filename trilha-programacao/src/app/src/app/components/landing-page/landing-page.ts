import { Component, Input, OnDestroy, OnInit, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  images: string[] = [
    'assets/kobu-agency-ipARHaxETRk-unsplash.jpg',
    'assets/luca-bravo-XJXWbfSo2f0-unsplash (1).jpg',
    'assets/szabo-viktor-z1aLTzG2VGU-unsplash.jpg'
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlidePosition();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slide = document.querySelector('.carousel-slide') as HTMLElement;
    slide.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}

