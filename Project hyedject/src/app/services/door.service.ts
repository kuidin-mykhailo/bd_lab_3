import {Injectable} from '@angular/core';
import {Door} from "../door";
import {Observable, of} from "rxjs";
import {DOORS} from "../mock-skuds";

@Injectable({
  providedIn: 'root'
})
export class DoorService {

  constructor() {
  }

  getDoors(id: number): Observable<Door[]> {
    return of(DOORS.filter(door => door.skudId === id));
  }
}
