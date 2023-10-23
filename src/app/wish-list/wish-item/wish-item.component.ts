import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() { }
  ngOnInit(): void {}

  toggleComplete() {
    this.wishComplete = !this.wishComplete;
    this.wishCompleteChange.emit(this.wishComplete);
  }
}
