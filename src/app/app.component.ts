import { Component } from '@angular/core';
import { WishItem } from "../shared/models/wishItem";

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
  // visibleItems : WishItem[] = [];
    filter: any;
}
