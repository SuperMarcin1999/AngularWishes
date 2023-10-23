import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Output() filterEmitter = new EventEmitter();
  listWishesSelectedIndex = 0;
  filters = [
      (item: WishItem) => item,
      (item: WishItem) => !item.isComplete,
      (item: WishItem) => item.isComplete,
  ]
  constructor() { }
  ngOnInit(): void {
    this.filterEmitter.emit(this.filters[this.listWishesSelectedIndex]);
  }

  filterChanged($event: number) {
    this.filterEmitter.emit(this.filters[$event]);
  }
}
