import {Time} from "./time";

export class Card {
  skudId: number;
  id: number;
  name: string;
  cardId: string;
  hours: Time;
  date: Date;
  constructor(newSkudId: number, newId: number, newName: string, newCardId: string, newHours: Time, newDate: Date) {
    this.skudId = newSkudId;
    this.id = newId;
    this.name = newName;
    this.cardId = newCardId;
    this.hours = newHours;
    this.date = newDate;
  }
}
