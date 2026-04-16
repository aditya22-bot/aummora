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
    image: 'assets/images/products/vegetables.jpeg',
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'assets/images/products/indian_spices.jpeg',
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'assets/images/products/fruits.jpeg',
  },
  {
    id: 'dryfruits',
    name: 'Dry Fruits',
    image: 'assets/images/products/dry_foods.jpeg',
  },
  {
    id: 'grains',
    name: 'Grains & Staples',
    image: 'assets/images/products/grains_cereals.jpeg',
  },
];
 goToCategory(id: string) {
  this.router.navigate(['/category', id]);
}
}

