import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';

@Component({
  selector: 'app-background-silder',
  standalone: true,
  imports: [CommonModule,Products],
  templateUrl: './background-silder.component.html',
  styleUrls: ['./background-silder.component.scss'],
})
export class BackgroundSilder implements OnInit {

  images = [
    'assets/images/page1.jpg',
  'assets/images/page2.jpg',
  'assets/images/page3.jpg',
  'assets/images/page4.jpg',
  'assets/images/page5.jpg',
];

  currentIndex = signal(0);
  currentImage = signal(this.images[0]);

  ngOnInit(): void {
    setInterval(() => {
      const next = (this.currentIndex() + 1) % this.images.length;
      this.currentIndex.set(next);
      this.currentImage.set(this.images[next]);
    }, 5000);
  }
}
