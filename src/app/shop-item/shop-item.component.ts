import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  product: any
  readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  productId: number | null = null;

  ngOnInit(): void {
    this.productId = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    console.log(this.productId);
  }
}
