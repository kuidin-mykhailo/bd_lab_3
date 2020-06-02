export class Swipe {
  skudId: number;
  recordId: number;
  cardId: string;
  status: string;
  date: Date;
  constructor(skudId: number, recordId: number, cardId: string, status: string, date: Date) {
    this.skudId = skudId;
    this.recordId = recordId;
    this.cardId = cardId;
    this.status = status;
    this.date = date;
  }
}
