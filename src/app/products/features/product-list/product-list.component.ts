import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductsService } from '../../data-access/products.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    {{ productsState.state().status }}
    <div class="grid grid-cols-[repeat(4,minmax(0,1fr))]">
      @for (product of productsState.state().products; track product) {
        <app-product-card class="block" [product]="product" />
      }
    </div>
  `,
  styles: ``,
  providers: [ProductsStateService, ProductsService],
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
}
