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
    icon: 'assets/icons/vegetables.svg'
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'assets/images/products/indian_spices.jpeg',
    icon: 'assets/icons/spices.svg'
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'assets/images/products/fruits.jpeg',
    icon: 'assets/icons/fruits.svg'
  },
  {
    id: 'dryfruits',
    name: 'Dry Fruits',
    image: 'assets/images/products/dry_foods.jpeg',
    icon: 'assets/icons/nuts.svg'
  },
  {
    id: 'grains',
    name: 'Grains & Staples',
    image: 'assets/images/products/grains_cereals.jpeg',
    icon: 'assets/icons/grains.svg'
  }
];

goToCategory(id: string) {
  this.router.navigate(['/category', id]);
}
}

