import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
  }

  profile: Profile;

  initProfile(token: string) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    const isAdmin = decodedToken.realm_access.roles.find(i => i === 'admin') === 'admin';
    const name = decodedToken.given_name;
    const surname = decodedToken.family_name;
    this.profile = new Profile(isAdmin, name, surname);
    console.log(this.profile);
  }

  getProfile() {
    return this.profile;
  }

}
