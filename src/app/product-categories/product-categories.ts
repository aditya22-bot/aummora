import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from '../footer/footer';
import { Products } from '../products/products';

@Component({
  selector: 'app-product-categories',
  imports: [Footer,Products],
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.scss',
})
export class ProductCategories {
  constructor(private router: Router) {}


 categories = [
  {
    id: 'vegetables',
    name: 'Basmati Rice',
    image: 'assets/images/products/basmati_rice.jpeg',
    icon: 'assets/icons/vegetables.svg'
  },
  {
    id: 'spices',
    name: 'Spices',
    image: 'assets/images/products/spices.jpeg',
    icon: 'assets/icons/spices.svg'
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    image: 'assets/images/products/fresh_fruit.jpeg',
    icon: 'assets/icons/fruits.svg'
  },
  {
    id: 'dryfruits',
    name: 'Dry Fruits',
    image: 'assets/images/products/nuts _and_fruit.jpeg',
    icon: 'assets/icons/nuts.svg'
  },
  {
    id: 'grains',
    name: 'Pulses',
    image: 'assets/images/products/pulses.jpeg',
    icon: 'assets/icons/grains.svg'
  }
];

goToCategory(id: string) {
  this.router.navigate(['/category', id]);
}
}

