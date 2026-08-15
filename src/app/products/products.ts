import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Footer } from '../footer/footer';
import { MatIconModule } from '@angular/material/icon';
import { ServiceOffer } from '../service-offer/service-offer';
import { ProductCategories } from '../product-categories/product-categories';
// ServiceOffer
@Component({
  selector: 'app-products',
  imports: [CommonModule,Footer,MatIconModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

countries = 0;
products = 0;
clients = 0;
shipments = 0;


ngOnInit(): void {

  this.animateCounter('countries', 20);

  this.animateCounter('products', 100);

  this.animateCounter('clients', 500);

  this.animateCounter('shipments', 1000);

}
animateCounter(
  property: 'countries' | 'products' | 'clients' | 'shipments',
  target: number,
  duration = 2000
) {

  const fps = 60;
  const totalFrames = Math.round(duration / (1000 / fps));

  let frame = 0;

  const counter = setInterval(() => {

    frame++;

    const progress = frame / totalFrames;

    this[property] = Math.round(target * progress);

    if (frame >= totalFrames) {

      this[property] = target;

      clearInterval(counter);

    }

  }, 1000 / fps);
}
product = [
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
  items = [
    { icon: 'public', title: 'IEC', subtitle: 'Import Export Code' },
    { icon: 'receipt_long', title: 'GST Registered', subtitle: 'Government Approved' },
    { icon: 'factory', title: 'MSME', subtitle: 'Registered MSME Unit' },
    { icon: 'eco', title: 'FSSAI', subtitle: 'Food & Agro Certification' },
    { icon: 'local_florist', title: 'Phytosanitary Support', subtitle: 'For Plant & Herbal Goods' },
    { icon: 'inventory', title: 'Export Packaging', subtitle: 'International Standards' },
  ];
  features = [
    {
      icon: 'verified',
      title: 'Quality Assurance',
      desc: 'Every product goes through careful sourcing and inspection.'
    },
    {
      icon: 'workspace_premium',
      title: 'Quality Products',
      desc: 'Delivering premium, reliable, internationally compliant products.'
    },
    {
      icon: 'sell',
      title: 'Competitive Pricing',
      desc: 'Strong supplier network ensures best market rates.'
    },
    {
      icon: 'science',
      title: 'Innovation & Customization',
      desc: 'Market-driven solutions tailored to evolving needs.'
    },
    {
      icon: 'local_shipping',
      title: 'Efficient Logistics',
      desc: 'Optimized supply chains ensuring timely deliveries.'
    },
    {
      icon: 'route',
      title: 'Efficient Supply Chain',
      desc: 'Seamless, on-time operations from source to shipment.'
    },
    {
      icon: 'stacked_bar_chart',
      title: 'Flexible MOQ',
      desc: 'Ideal for startups, wholesalers, and bulk importers.'
    },
    {
      icon: 'support_agent',
      title: 'Dedicated Support',
      desc: 'Exceptional customer care with strong partnerships.'
    },
    {
      icon: 'travel_explore',
      title: 'Custom Sourcing',
      desc: 'Handling multi-product, multi-category requirements.'
    },
    {
      icon: 'thumb_up',
      title: 'Customer-Centric Approach',
      desc: 'Your trust and satisfaction are our priority.'
    }
  ];
}




