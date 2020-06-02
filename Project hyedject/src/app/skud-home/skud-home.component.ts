import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Door} from "../door";
import {DoorService} from "../services/door.service";
import {Observable, of} from "rxjs";
import {Swipe} from "../swipe";
import {SwipeService} from "../swipe.service";
import {CardService} from "../services/card.service";

@Component({
    selector: 'app-skud-home',
    templateUrl: './skud-home.component.html',
    styleUrls: ['./skud-home.component.css']
})
export class SkudHomeComponent implements OnInit {
    swipeList: Swipe[];
    doors: Door[];

    constructor(private doorService: DoorService,
                private route: ActivatedRoute,
                private swipeService: SwipeService,
                private cardService: CardService) {
    }

    ngOnInit(): void {
        this.getDoors();
        this.getSwipes();
    }

    getDoors(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.doorService.getDoors(id)
            .subscribe(door => this.doors = door);
    }

    getSwipes(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.swipeService.getLast5Swipes(id).subscribe(swipe => this.swipeList = swipe);
    }

    isClicked(door: Door) {
        door.doorStatus = true;
    }

    getName(cardId) {
        return this.cardService.getName(cardId);
    }

}

//TODO Список пооследних свайпов с переход в раздел свайп
