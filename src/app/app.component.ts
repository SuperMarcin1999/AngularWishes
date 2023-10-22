import { Component } from '@angular/core';
import { WishItem } from "../shared/models/wishItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWebstormmmm';
  items : WishItem[] = [
     new WishItem('To Learn Angular')
    // new WishItem('Get Yerba', true),
    // new WishItem('Sialalala', false)
  ];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
