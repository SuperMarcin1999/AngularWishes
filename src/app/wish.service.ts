import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private httpClient: HttpClient) { }

  getWishes(){
    return this.httpClient.get('assets/wishes.json');
  }
}
