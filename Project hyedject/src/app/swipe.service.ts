import { Injectable } from '@angular/core';
import {SWIPES} from "./mock-skuds";
import {Swipe} from "./swipe";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SwipeService {

  getSwipes(id: number): Observable<Swipe[]> {
    console.log(SWIPES.find(swipe => swipe.skudId === id));
    return of(SWIPES.filter(swipe => swipe.skudId === id));
  }

  addSwipe(skudId: number, recordId: number, cardId: string, status: string, date: Date ) {
    const newSwipe = new Swipe(skudId, recordId, cardId, status, date);
    SWIPES.push(newSwipe);
    console.log(SWIPES);
  }

  getSwipeLastIn(cardId): Date {
    const length = SWIPES.filter(swip => swip.cardId === cardId && swip.status === "Allow In").length;
    return SWIPES.filter(swip => swip.cardId === cardId && swip.status === "Allow In")[length - 1].date;
  }

  getLast5Swipes(skudId: number): Observable<Swipe[]> {
    return of(SWIPES.filter(swipe => swipe.skudId === skudId).slice(-5));
  }

  constructor() { }
}
