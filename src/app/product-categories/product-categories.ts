import { Component } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  imports: [],
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.scss',
})
export class ProductCategories {
categories = [
  {
    name: 'Wheat',
    date: 'Mar 28',
    image: 'assets/images/products/catrgory1.jpg',
    desc: 'High quality export wheat',
    products: [
      { name: 'Wheat Grade A', image: 'assets/images/products/catrgory1.jpg' },
    ],
  },
  {
    name: 'Turmeric',
    date: 'Mar 28',
    image: 'assets/images/products/category2.jpg',
    desc: 'Organic turmeric powder',
    products: [
      { name: 'Turmeric Powder', image: 'assets/images/products/category2.jpg' },
    ],
  },
  {
    name: 'Tomatoes',
    date: 'Mar 28',
    image: 'assets/images/products/category3.jpg',
    desc: 'Fresh farm tomatoes',
    products: [
      { name: 'Fresh Tomato', image: 'assets/images/products/category3.jpg' },
    ],
  },
];
}
