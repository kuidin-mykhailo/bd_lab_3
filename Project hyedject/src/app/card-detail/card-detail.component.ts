import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Skud} from "../skud";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../services/card.service";
import {Card} from "../card";
import {CARDS} from "../mock-skuds";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../profile.service";
import {Profile} from "../profile";
import {Time} from "../time";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() skud: Skud;
  cards: Card[];
  addCardBoolean = false;
  editId = "";
  profile: Profile;
  cardName = "";
  newCardId = "";
  cardHours = "";
  cardDate = "";


  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private router: Router,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.getCards();
    this.profile = this.profileService.getProfile();
  }

  getCards(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cards = this.cardService.getCards(id);
  }

  addCard(name, cardId, date): void {
    const skudId = +this.route.snapshot.paramMap.get('id');
    const card = CARDS.filter(cardArray => cardArray.skudId === skudId).length;
    const tmpDate = new Date(date);
    this.cardService.addCard(skudId, card, name, cardId, tmpDate);
    this.setAddCardBoolean(false);
    this.getCards();
  }

  setCardName(event: any) {
    this.cardName = event.target.value;
  }

  setCardId(event: any) {
    this.newCardId = event.target.value;
  }

  setCardHours(event: any) {
    this.cardHours = event.target.value;
  }

  setCardDate(event: any) {
    this.cardDate = event.target.value;
  }
  deleteCard(cardId): void {
    const skudId = +this.route.snapshot.paramMap.get('id');
    const indexCard = CARDS.findIndex(card => card.id === cardId && card.skudId === skudId);
    this.cardService.deleteCard(indexCard);
    this.getCards();
  }

  setAddCardBoolean(value: boolean) {
    this.addCardBoolean = value;
  }

  searchCards(searchState: string, $event): void {
    console.log("event.key: " + $event.key);
    if (searchState.length === 0) {
      this.getCards();
    }
    console.log("searchState: " + searchState);
    const skudId = +this.route.snapshot.paramMap.get('id');
    this.cards = CARDS.filter(cardArray => cardArray.skudId === skudId
      && (cardArray.name.includes(searchState)
        || cardArray.cardId.includes(searchState)));
    console.log(this.cards);
  }

  editStatus(cardId: string) {
    this.editId = cardId;
    this.getCards();
  }

  editStatusNull() {
    this.editId = "";
  }

  changeCard(cardId: string) {
    const tmp = this.cards.find(card => card.cardId === cardId);
    const index = this.cards.lastIndexOf(tmp);
    if (this.cardName !== "") {
      this.cards[index].name = this.cardName;
    }
    if (this.newCardId !== "") {
      this.cards[index].cardId = this.newCardId;
    }
    if (this.cardHours !== "") {
      const str = this.cardHours.split("-");
      const time = new Time(+str[0], +str[1], +str[2], 0);
      this.cards[index].hours = time;
    }
    if (this.cardDate !== "") {
      this.cards[index].date = new Date(Date.parse(this.cardDate));
    }
    this.cardName = "";
    this.newCardId = "";
    this.cardHours = "";
    this.cardDate = "";
    this.editStatusNull();
  }

  sortByName(): void {
    console.log("Sort by Name");
    this.cards.sort(function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  sortByCardId(): void {
    console.log("Sort by CardID");
    this.cards.sort(function compare(a, b) {
      if (+a.cardId < +b.cardId) {
        return -1;
      }
      if (+a.cardId > +b.cardId) {
        return 1;
      }
      return 0;
    });
  }

  setSelectedCard(skudId: number, cardId: number): void {
    this.router.navigate(["/cards/" + skudId.toString() + "/" + cardId.toString()]);
  }
}

// TODO Сделать выбор каждого поля ( выбор всех полей )
