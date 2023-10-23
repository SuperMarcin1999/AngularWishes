import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.css']
})
export class AddWishComponent implements OnInit {
  @Output() addWishEvent = new EventEmitter<WishItem>();
  newWishText = '';

  constructor() { }

  ngOnInit(): void {}

  addNewWish() {
    this.addWishEvent.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
