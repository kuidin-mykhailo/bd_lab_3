import {Injectable} from '@angular/core';
import {CardService} from "./card.service";
import {Card} from "../card";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  constructor(private cardService: CardService) {
  }

  getSelectedCard(skudId: any, cardId: any) {
    return(this.cardService.getCards(skudId).find(card => card.id === cardId));
  }
}
