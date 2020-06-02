import {Component, OnInit} from '@angular/core';
import {Skud} from "./skud";
import {SkudService} from "./services/skud.service";
import {ConfigService} from "./services/config.service";
import {SwPush} from "@angular/service-worker";
import {NewsletterService} from "./newsletter.service";
import {User} from "./user";
import {UserInfoServiceService} from "./user-info-service.service";
import { OAuthService } from 'angular-oauth2-oidc';
import {ProfileService} from "./profile.service";
import {Profile} from "./profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  title = 'skud';

  readonly VAPID_PUBLIC_KEY = 'BEZ7CDrlsclZBuDgH4hwprVQpAMcAtXcWk1NUzRdVeZ-asvliQTswiJmPkxHZDUQmh20wJ3zQUihJ2hXHp6qV4I';

  constructor(private skudService: SkudService,
              private configService: ConfigService,
              private swPush: SwPush,
              private newsletterService: NewsletterService,
              private userInfoService: UserInfoServiceService,
              private readonly oauthService: OAuthService,
              private profileService: ProfileService
              ) {
  }

  selectedSkud: Skud;

  skuds: Skud[];
  editStatus = [];
  addButtonStatus = false;
// СОЗДАЕМ ФУНКЦИЮ
  userDetails: any;

  profile: Profile;

  ngOnInit() {
    try {
      this.user = this.userInfoService.getUser();
      this.profileService.initProfile(this.oauthService.getAccessToken());
      this.profile = this.profileService.getProfile();
      this.getSkuds();
    } catch (e) {
      console.log('Failed to load user details', e);
    }

  }

  onSelect(skud: Skud): void {
    this.selectedSkud = skud;
  }

  getSkuds(): void {
    this.skudService.getSkuds()
      .subscribe(skuds => this.skuds = skuds);
  }

  delete(skud: Skud): void {
    this.skuds = this.skuds.filter(s => s !== skud);
    this.skudService.deleteSkud(skud.id);
  }

  addButton(): void {
    this.addButtonStatus = true;
  }

  addNewSkud(skudName, deviceNumber, driverVersion, ip, submask, gateway): void {
    this.skudService.addSkud(skudName);
    this.configService.addConfig(deviceNumber, driverVersion, ip, submask, gateway);
    this.addButtonStatus = false;
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

  login() {
    // this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

}


// TODO Сделать Блок юзер и заполнить его полями
// TODO MKS: Сделать графики и статистику для HOME
