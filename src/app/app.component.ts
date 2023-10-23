import { Component } from '@angular/core';
import { WishItem } from "../shared/models/wishItem";
import { EventService } from "../shared/services/EventService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
     new WishItem('To Learn Angular'),
     new WishItem('Get Yerba', true),
     new WishItem('Sialalala', false)
  ];

  constructor(eventService: EventService) {
      eventService.listen('removeWish', (wish: any) => {
        let indexToRemove = this.items.indexOf(wish);
        this.items.splice(indexToRemove, 1);
    })
  }

  filter: any;
}
