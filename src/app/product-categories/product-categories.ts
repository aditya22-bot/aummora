import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-categories',
  imports: [Footer,CommonModule,RouterModule],
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.scss',
})
export class ProductCategories {
  constructor(private router: Router) {}
mobileMenuOpen = false;

  toggleMenu(): void {
  this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
  this.mobileMenuOpen = false;
  }

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

