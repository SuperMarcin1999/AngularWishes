import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WishItem} from "../../../shared/models/wishItem";

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() filter : any;
  @Output() filterChange = new EventEmitter(); // musi byc te "Change"
  listWishesSelectedIndex = 0;
  constructor() { }
  ngOnInit(): void {
    this.updateFilter(this.listWishesSelectedIndex);
  }

  updateFilter($event: number) {
    this.filter = filters[$event];
    this.filterChange.emit(this.filter);
  }
}
