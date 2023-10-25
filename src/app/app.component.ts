import {Component, OnInit} from '@angular/core';
import { WishItem } from "../shared/models/wishItem";
import { EventService } from "../shared/services/EventService";
import { WishService } from "./wish/wish.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: any;
  items : WishItem[] = [];
  constructor(eventService: EventService, private withService: WishService) {
      eventService.listen('removeWish', (wish: any) => {
        let indexToRemove = this.items.indexOf(wish);
        this.items.splice(indexToRemove, 1);
    })
  }
  ngOnInit(): void {
    this.withService.getWishes().subscribe(
        (data: any) => {
          this.items = data;
        },
        (error: any) => {
          alert(error.message);
        }
    );
  }
}
