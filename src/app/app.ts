// app.ts
import { Component } from '@angular/core';
// import { HeadersComponent } from './aumora-dashbord/headers/headers';
import { RouterOutlet,RouterLink  } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  
}
