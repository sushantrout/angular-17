import { Component } from '@angular/core';
import { ProductProvider } from '../../../model/product';

@Component({
  selector: 'app-for-example',
  templateUrl: './for-example.component.html',
  styleUrl: './for-example.component.css'
})
export class ForExampleComponent {
  products = ProductProvider.products;
}
