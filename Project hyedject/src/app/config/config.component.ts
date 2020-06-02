import { Component, OnInit } from '@angular/core';
import {Config} from "../config";
import {ConfigService} from "../services/config.service";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../card";
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config;
  cards: Card[];

  constructor(private configService: ConfigService,
              private route: ActivatedRoute,
              private cardService: CardService) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.configService.getConfig(id)
      .subscribe(config => this.config = config);
    this.cards = this.cardService.getCards(id);
  }

}

//TODO Расширить таблицу и добавить Edit для полей
