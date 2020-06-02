import {Injectable} from '@angular/core';
import {VISITS} from "./mock-skuds";
import {VisitCounter} from "./visit-counter";
import {Time} from "./time";
import {Visits} from "./visits";

@Injectable({
    providedIn: 'root'
})
export class VisitsService {

    constructor() {
    }

    getVisitsByCardNumber(cardNumber: string) {
        return (VISITS.filter(visit => visit.cardNumber === cardNumber));
    }

    getVisitsByLastDays(skudId: number): Array<VisitCounter> {
        const visitCounterArray = new Array<VisitCounter>();
        const currentDate = new Date();
        for (let i = 9; i >= 0; i--) {
            const tmpDate = new Date();
            tmpDate.setDate(currentDate.getDate() - i);
            const tmp = new VisitCounter();
            tmp.visitsCount = VISITS.filter(visit => visit.entryDate.toLocaleDateString() === tmpDate.toLocaleDateString()).length;
            tmp.visitDate = tmpDate;
            tmp.skudId = skudId;
            visitCounterArray.push(tmp);
        }
        return visitCounterArray;
    }

    addVisit(skudId, cardNumber, entryDate, outDate, hours): void {
        const visit = new Visits(skudId, cardNumber, entryDate, outDate, hours);
        VISITS.push(visit);
    }
}
