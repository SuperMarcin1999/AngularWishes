import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { WishItem } from "../shared/models/wishItem";

@Injectable({
  providedIn: 'root'
})
export class WishService {
  constructor(private httpClient: HttpClient) { }

  private getStardardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getWishes(){
    let options = this.getStardardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    return this.httpClient.get('assets/wishes.json?', options);
  }

  private addWish(wish: WishItem) {
    let options = this.getStardardOptions();
    options.headers = options.headers.set('Authorization','my super token');

    this.httpClient.post('assets/wishes.json', wish, options);
  }
}
