import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';
import { RouterModule } from '@angular/router';
import { ProductCategories } from '../product-categories/product-categories';

@Component({
  selector: 'app-background-silder',
  standalone: true,
  imports: [CommonModule,RouterModule,ProductCategories,],
  templateUrl: './background-silder.component.html',
  styleUrls: ['./background-silder.component.scss'],
})
export class BackgroundSilder implements OnInit {

  images = [
  'assets/images/background_silder_1.jpg',
  'assets/images/background_silder_2.jpg',
  // 'assets/images/background_silder_3.jpg',
  // 'assets/images/background_silder_4.jpg',
  // 'assets/images/background_silder_5.jpg',
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
