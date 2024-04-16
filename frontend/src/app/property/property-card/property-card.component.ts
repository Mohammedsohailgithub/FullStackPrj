import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  property = {
    "id" :1,
    "name":"Tata-group",
    "type":"House",
    "price":10000
  }
}
