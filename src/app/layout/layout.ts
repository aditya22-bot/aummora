import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'], // ✅ plural
})
export class Layout {
  thumbDropped=[]
  value = input(0);
  label = computed(() => `The slider's value is ${this.value()}`);
call(){
 
}
}
 
