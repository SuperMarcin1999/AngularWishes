import { Component } from '@angular/core';
import { WishItem } from "../shared/models/wishItem";
import eventService from "../shared/services/EventService";

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

  constructor() {
      eventService.listen('removeWish', (wish: any) => {
      this.items = this.items.filter(i => i != wish)
    })
  }

  filter: any;
}
