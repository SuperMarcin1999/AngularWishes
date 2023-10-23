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
     new WishItem('To Learn Angular'),
     new WishItem('Get Yerba', true),
     new WishItem('Sialalala', false)
  ];
  visibleItems : WishItem[] = [];
  listFilter = '';

  filterChanged($event: any) {
    switch ($event){
      case "0": this.visibleItems = this.items; break;
      case "1": this.visibleItems = this.items.filter(item => !item.isComplete); break;
      case "2": this.visibleItems = this.items.filter(item => item.isComplete); break;
    }
  }
}
