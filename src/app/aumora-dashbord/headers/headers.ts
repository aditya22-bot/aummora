// headers.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Layout } from '../../layout/layout';
import { BackgroundSilder } from '../../background-silder/background-silder.component';
@Component({
  selector: 'app-headers',
  standalone: true,
   imports: [CommonModule, RouterModule,BackgroundSilder],
  templateUrl: './headers.html',
  styleUrls: ['./headers.scss']
})
export class HeadersComponent {}
