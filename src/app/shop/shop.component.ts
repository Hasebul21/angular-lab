import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  readonly router: Router = inject(Router);

  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 20.99,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 30.99,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  ProductDetails(productId: number) {
    this.router.navigate(['products', 'product', productId]);
  }
}
