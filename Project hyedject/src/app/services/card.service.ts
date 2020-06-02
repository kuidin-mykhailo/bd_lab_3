import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {CARDS, USERS} from "../mock-skuds";
import {Card} from "../card";
import * as moment from "moment";
import {Time} from "../time";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CardService {

    getCards(id: number): Card[] {
        return CARDS.filter(card => card.skudId === id);
    }

    addCard(skudId: number, id: number, name: string, cardId: string, date: Date): void {
        const hours = new Time(0, 0, 0, 0);
        const newCard = new Card(skudId, id, name, cardId, hours, date);
        CARDS.push(newCard);
    }

    deleteCard(indexOfCard: number) {
        if (indexOfCard > -1) {
            CARDS.splice(indexOfCard, 1);
        }
    }

    updateHours(cardId: string, hours: Time): void {
        const cardIndex = CARDS.findIndex(card => card.cardId === cardId);
        if (hours.getMs() !== 0) {
            CARDS[cardIndex].hours.ms += hours.ms;
            if (CARDS[cardIndex].hours.ms >= 1000) {
                CARDS[cardIndex].hours.secs += Math.ceil(CARDS[cardIndex].hours.ms / 1000);
                CARDS[cardIndex].hours.ms = CARDS[cardIndex].hours.ms % 1000;
            }
        }
        if (hours.getSecs() !== 0) {
            CARDS[cardIndex].hours.secs += hours.secs;
            if (CARDS[cardIndex].hours.secs >= 60) {
                CARDS[cardIndex].hours.mins += Math.ceil(CARDS[cardIndex].hours.secs / 60);
                CARDS[cardIndex].hours.secs = CARDS[cardIndex].hours.secs % 60;
            }
        }
        if (hours.getMins() !== 0) {
            CARDS[cardIndex].hours.mins += hours.mins;
            if (CARDS[cardIndex].hours.mins >= 60) {
                CARDS[cardIndex].hours.hours += Math.ceil(CARDS[cardIndex].hours.mins / 60);
                CARDS[cardIndex].hours.mins = CARDS[cardIndex].hours.mins % 60;
            }
        }
        if (hours.getHours() !== 0) {
            CARDS[cardIndex].hours.hours += hours.hours;
        }
    }

    getName(cardId): string {
        let name = "";
        try {
            name = CARDS.find(card => card.cardId === cardId).name;
        } catch (Exception) {
            name = "undefined";
        }
        return name;
    }

    constructor() {
    }
}
