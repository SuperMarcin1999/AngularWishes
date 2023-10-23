import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import eventService from "../../../shared/services/EventService";


@Component({
  selector: 'wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {
  @Input() wishText? : string;
  @Output() wishTextChange = new EventEmitter();
  @Input() wishComplete? : boolean
  @Output() wishCompleteChange = new EventEmitter();
  get cssClasses () {
    // return this.wishComplete ? [] : ["strikeout", "text-muted"];
    // return {"strikeout" : this.wishComplete, "text-muted" : this.wishComplete};
    return {"strikeout text-muted" : this.wishComplete};
  }
  constructor() { }
  ngOnInit(): void {}

  toggleComplete() {
    this.wishComplete = !this.wishComplete;
    this.wishCompleteChange.emit(this.wishComplete);
  }

  removeWish() {
    eventService.emit('removeWish', this.wishText);
  }
}
