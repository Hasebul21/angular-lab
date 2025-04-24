import { Router, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProfileComponent } from "./profile/profile.component";
import { ShopComponent } from "./shop/shop.component";
import { ChatComponent } from "./chat/chat.component";
import { ShopItemComponent } from "./shop-item/shop-item.component";

export const routerConfig: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'products/product/:id',
    component: ShopItemComponent
  }
]

export const RouteNames = {
  about: 'about',
  profile: 'profile',
  shop: 'shop',
  chat: 'chat'

}