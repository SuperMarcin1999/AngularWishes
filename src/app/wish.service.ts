import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { WishItem } from "../shared/models/wishItem";
import {catchError, throwError} from "rxjs";

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
    return this.httpClient.get('assets/wishes.json?', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('There is a issue with client or network: ', error.error);
    }else{
      console.error('Server-side error: ', error.error);
    }

    // error jako komunikat dla uzytkownika, wyzej error "techniczny" do konsoli, bardziej szczegolowy
    return throwError(() => new Error("Cannot retrieve wishes from server"));
  }

  private addWish(wish: WishItem) {
    let options = this.getStardardOptions();
    options.headers = options.headers.set('Authorization','my super token');

    this.httpClient.post('assets/wishes.json', wish, options);
  }
}
