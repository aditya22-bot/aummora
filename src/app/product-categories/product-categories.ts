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
      title: "Herbal & Ayurvedic Products",
      image: "assets/images/products/Herbal.png",
      desc: "Moringa Powder, Amla Powder, Neem Powder, Turmeric, Herbal Oils & Extracts"
    },
    {
      title: "Food & Agro Products",
      image: "assets/images/products/Food.png",
      desc: "Raisins, Spices, Dry Fruits, Dehydrated Products etc"
    },
    {
      title: "Handicraft Products",
      image: "assets/images/products/Handicraft.png",
      desc: "Copper, wooden, leather handicraft"
    },
    {
      title: "General Merchandise (Merchant Export)",
      image: "assets/images/products/Merchandise.png",
      desc: "Custom product sourcing — any category, any volume"
    }
  ];
}
