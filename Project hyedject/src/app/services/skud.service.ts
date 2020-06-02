import {Injectable} from '@angular/core';
import {SKUDS} from "../mock-skuds";
import {Skud} from "../skud";
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkudService {

  private skudUrl = 'api/skuds';

  constructor(private http: HttpClient) {
  }

  lastId: number;

  getSkuds(): Observable<Skud[]> {
    return of(SKUDS);
  }

  deleteSkud(id: number) {
    if (id !== -1) {
      SKUDS.splice(id, 1);
    }
  }

  addSkud(skudName) {
    console.log(SKUDS.length);
    this.lastId = SKUDS.length + 1;
    if (SKUDS.length === 0) {
      this.lastId = 1;
    }
    const newSkud = new Skud(this.lastId, skudName);
    SKUDS.push(newSkud);
    console.log(SKUDS);
  }

}
