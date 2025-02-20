import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../base.http.service';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.inteface';

@Injectable()
export class ProductsService extends BaseHttpService {
  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }
}
