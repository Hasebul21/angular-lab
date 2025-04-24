import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './app.config';
import { NavComponent } from './nav/nav.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    ShopComponent,
    ChatComponent,
    NavComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
