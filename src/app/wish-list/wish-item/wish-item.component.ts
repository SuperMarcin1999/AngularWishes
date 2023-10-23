import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import eventService from "../../../shared/services/EventService";
import {WishItem} from "../../../shared/models/wishItem";


@Component({
  selector: 'wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {
  @Input() wish! : WishItem;
  @Output() wishChange = new EventEmitter();
  constructor() { }
  ngOnInit(): void {}

  get cssClasses () {
    // return this.wishComplete ? [] : ["strikeout", "text-muted"];
    // return {"strikeout" : this.wishComplete, "text-muted" : this.wishComplete};
    return {"strikeout text-muted" : this.wish.isComplete};
  }

  toggleComplete() {
    this.wish.isComplete = !this.wish.isComplete;
    this.wishChange.emit(this.wish);
  }
  removeWish() {
    eventService.emit('removeWish', this.wish);
  }
}
