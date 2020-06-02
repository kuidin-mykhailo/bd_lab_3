import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Skud} from "../skud";
import {Swipe} from "../swipe";
import {SwipeService} from "../swipe.service";
import {NewsletterService} from "../newsletter.service";
import {CardService} from "../services/card.service";
import {Time} from "../time";
import {VisitsService} from "../visits.service";

@Component({
    selector: 'app-swipe-detail',
    templateUrl: './swipe-detail.component.html',
    styleUrls: ['./swipe-detail.component.css']
})


export class SwipeDetailComponent implements OnInit {
    @Input() skud: Skud;
    swipes: Swipe[];
    addSwipeBoolean = false;

    constructor(private swipeService: SwipeService,
                private route: ActivatedRoute,
                private newsletterService: NewsletterService,
                private cardService: CardService,
                private visitsService: VisitsService
    ) {
    }

    ngOnInit(): void {
        this.getSwipes();
    }

    getSwipes() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.swipeService.getSwipes(id)
            .subscribe(swipes => this.swipes = swipes);
    }

    addSwipe(cardId, status): void {
        const skudId = +this.route.snapshot.paramMap.get('id');
        let index = 0;
        let recordId = 130;
        if (this.swipes.length > 0) {
            index = this.swipes.length - 1;
            recordId = this.swipes[index].recordId + 1;
        }
        const now = new Date();
        this.addSwipeBoolean = false;
        this.swipeService.addSwipe(skudId, recordId, cardId, status, now);
        this.getSwipes();
        if (status === "Allow Out") {
            const startTime = this.swipeService.getSwipeLastIn(cardId);
            console.log("StartTime: " + startTime);
            const time = this.getTimeDifference(startTime, now);
            console.log("DiffTime: " + time.hours + "h " + time.mins + "min " + time.secs + "sec");
            this.cardService.updateHours(cardId, time);
            this.visitsService.addVisit(skudId, cardId, startTime, now, time);
        }
    }

    getTimeDifference(purchaseDate, endDate): Time {
        const diffMs = (endDate - purchaseDate);
        return new Time(0, 0, 0, diffMs);
    }

    getName(cardId): string {
        return this.cardService.getName(cardId);
    }
}
