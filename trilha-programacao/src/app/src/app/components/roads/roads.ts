import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-roads',
  imports: [CommonModule, RouterModule],
  templateUrl: './roads.html',
  styleUrl: './roads.css',
})
export class Roads {
  @Input() imageSrc: string = ''; // Caminho da imagem
  @Input() title: string = ''; // Título do card
  @Input() description: string = ''; // Descrição do card
  @Input() link: string = ''; // Link do botão
}
