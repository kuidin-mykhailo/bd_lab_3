import {Component, OnInit} from '@angular/core';
import {Card} from "../card";
import {CardInfoService} from "../services/card-info.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UserInfoServiceService} from "../user-info-service.service";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  card: Card;
  user: User;

  constructor(private cardInfoService: CardInfoService,
              private userInfoServiceService: UserInfoServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCardInfo();
    this.user = this.userInfoServiceService.getUserByCardId(this.card.cardId);
  }

  getCardInfo() {
    const skudId = +this.route.snapshot.paramMap.get('id');
    const cardId = +this.route.snapshot.paramMap.get('cardId');
    this.card = this.cardInfoService.getSelectedCard(skudId, cardId);
  }

}

// TODO Последний заход, общее за неделю,
// TODO  История посещений (когда, во сколько вошел, сколько был , во сколько вышел )
