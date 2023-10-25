import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishItemComponent } from './wish-list/wish-item/wish-item.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishItemComponent
  ]
})
export class WishModule { }
