import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  imports: [],
  templateUrl: './category-details.html',
  styleUrl: './category-details.scss',
})
export class CategoryDetails {
  categoryId: string = '';

  // productsMap: any = {
  //   vegetables: ['Onion', 'Tomato', 'Potato'],
  //   spices: ['Turmeric', 'Red Chili', 'Cumin Seeds'],
  //   fruits: ['Grapes', 'Banana', 'Pomegranate'],
  // };

  productsMap: any = {
  vegetables: [
    { name: 'Onion', image: 'assets/images/products/onion.jpg' },
    { name: 'Tomato', image: 'assets/images/products/tomato.jpg' },
    { name: 'Potato', image: 'assets/images/products/potato.jpg' },
  ],
   spices: [
    { name: 'Turmeric', image: 'assets/images/products/turmeric.jpg' },
    { name: 'Red Chili', image: 'assets/images/products/red-chili.jpg' },
    { name: 'Cumin Seeds', image: 'assets/images/products/cumin.jpg' },
    { name: 'Coriander Seeds', image: 'assets/images/products/coriander.jpg' },
  ],

  fruits: [
    { name: 'Grapes', image: 'assets/images/products/grapes.jpg' },
    { name: 'Pomegranate', image: 'assets/images/products/pomegranate.jpg' },
    { name: 'Banana', image: 'assets/images/products/banana.jpg' },
  ],

  dryfruits: [
    { name: 'Raisins', image: 'assets/images/products/raisins.jpg' },
    { name: 'Cashew Nuts', image: 'assets/images/products/cashew.jpg' },
    { name: 'Almonds', image: 'assets/images/products/almonds.jpg' },
  ],

  grains: [
    { name: 'Non-Basmati Rice', image: 'assets/images/products/non-basmati.jpg' },
    { name: 'Basmati Rice', image: 'assets/images/products/basmati.jpg' },
    { name: 'Wheat', image: 'assets/images/products/wheat.jpg' },
  ],
};

  products: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.categoryId = this.route.snapshot.params['id'];
    this.products = this.productsMap[this.categoryId] || [];
}
}
