import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const skuds = [
      {id: 1, name: 'Skud#1'},
      {id: 2, name: 'Skud#2'}
    ];
    return {skuds};
  }

  constructor() {
  }
}
