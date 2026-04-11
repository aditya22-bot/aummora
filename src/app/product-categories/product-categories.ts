import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  imports: [],
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.scss',
})
export class ProductCategories {
  constructor(private router: Router) {}


  categories = [
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    image: 'assets/images/products/Food.png',
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'assets/images/products/Food.png',
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'assets/images/products/Food.png',
  },
  {
    id: 'dryfruits',
    name: 'Dry Fruits',
    image: 'assets/images/products/Food.png',
  },
  {
    id: 'grains',
    name: 'Grains & Staples',
    image: 'assets/images/products/Food.png',
  },
];
 goToCategory(id: string) {
  this.router.navigate(['/category', id]);
}
}

