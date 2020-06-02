import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CardDetailComponent} from "./card-detail/card-detail.component";
import {SkudNavigationComponent} from "./skud-navigation/skud-navigation.component";
import {SkudHomeComponent} from "./skud-home/skud-home.component";
import {ConfigComponent} from "./config/config.component";
import {CardInfoComponent} from "./card-info/card-info.component";
import {SwipeDetailComponent} from "./swipe-detail/swipe-detail.component";

const routes: Routes = [
  {path: 'cards/:id', component: CardDetailComponent},
  {path: 'cards/:id/:cardId', component: CardInfoComponent},
  {path: 'home/:id', component: SkudHomeComponent},
  {path: 'config/:id', component: ConfigComponent},
  {path: 'swipe/:id', component: SwipeDetailComponent},
  {path: 'skuds', component: SkudNavigationComponent},
  {path: '', redirectTo: 'skuds/', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
