import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SkudDetailComponent} from './skud-detail/skud-detail.component';
import {CardDetailComponent} from './card-detail/card-detail.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {SkudNavigationComponent} from './skud-navigation/skud-navigation.component';
import {SkudHomeComponent} from './skud-home/skud-home.component';
import {ConfigComponent} from './config/config.component';
import {DoorComponent} from './door/door.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NewsletterService} from "./newsletter.service";
import {HttpClientModule} from '@angular/common/http';
import {SwipeDetailComponent} from './swipe-detail/swipe-detail.component';
import {FormsModule} from "@angular/forms";
import {CardInfoComponent} from './card-info/card-info.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {BarChartComponent} from "./card-info/bar-chart/bar-chart.component";
import {KeycloakAngularModule} from "keycloak-angular";
import { AuthConfigModule } from '../config/auth.config.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {DoorsBarChartComponent} from "./skud-home/bar-chart/door-bar-chart.component";


@NgModule({
  declarations: [
    AppComponent,
    SkudDetailComponent,
    CardDetailComponent,
    SkudNavigationComponent,
    SkudHomeComponent,
    ConfigComponent,
    DoorComponent,
    SwipeDetailComponent,
    CardInfoComponent,
    UserInfoComponent,
    BarChartComponent,
    DoorsBarChartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    AuthConfigModule,
    KeycloakAngularModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
