import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CtaSection } from '../cta-section/cta-section';
@Component({
  selector: 'app-service-offer',
  imports: [CommonModule,MatIconModule,RouterModule,CtaSection],
  templateUrl: './service-offer.html',
  styleUrl: './service-offer.scss',
})
export class ServiceOffer {
  services = [
    { icon: 'shopping_bag', title: 'Merchant Export (Multi-category)' },
    { icon: 'local_shipping', title: 'Bulk Sourcing & Procurement' },
    { icon: 'branding_watermark', title: 'Private Label & White Label Supply' },
    { icon: 'description', title: 'Export Documentation & Compliance' },
    { icon: 'handshake', title: 'Buyer-Supplier Sourcing / Commission Deals' },
    { icon: 'store', title: 'Domestic Wholesale Distribution' },
    { icon: 'local_mall', title: 'E-Commerce Product Supply & Fulfilment' },
    { icon: 'public', title: 'Export Partner for Indian Manufacturers' }
  ];
}
