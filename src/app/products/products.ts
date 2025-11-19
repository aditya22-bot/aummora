import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
products = [
    {
      title: 'Copper Bottles',
      image: 'assets/images/products/copper1.jpg',
      description: 'Explain what your service entails and why the visitor should use it'
    },
    {
      title: 'Copper Jugs',
      image: 'assets/images/products/copper1.jpg',
      description: 'Explain what your service entails and why the visitor should use it'
    },
    {
      title: 'Copper Gift Sets',
      image: 'assets/images/products/copper1.jpg',
      description: 'Explain what your service entails and why the visitor should use it'
    }
  ];
}




