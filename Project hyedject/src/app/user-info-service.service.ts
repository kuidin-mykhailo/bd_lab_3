import {Injectable} from '@angular/core';
import {User} from "./user";
import {USERS} from "./mock-skuds";

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {

  constructor() {
  }

  getUser(): User {
    return USERS.find(user => user.id === "2");
  }

  getUserByCardId(cardId: string): User {
    return USERS.find(user => user.cardId === cardId);
  }

}
