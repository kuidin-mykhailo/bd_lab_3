import {Time} from "./time";

export class Visits {
    skudId: number;
    cardNumber: string;
    entryDate: Date;
    outDate: Date;
    hours: Time;

    constructor(skudId: number, cardNumber: string, entryDate: Date, outDate: Date, hours: Time) {
        this.skudId = skudId;
        this.cardNumber = cardNumber;
        this.entryDate = entryDate;
        this.outDate = outDate;
        this.hours = hours;
    }
}
