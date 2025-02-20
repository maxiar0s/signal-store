import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  template: ` <p>product-list works!</p> `,
  styles: ``,
  providers: [ProductsService],
})
export default class ProductListComponent {
  private productsService = inject(ProductsService);

  constructor() {
    this.productsService
      .getProducts()
      .subscribe((products) => console.log(products));
  }
}
