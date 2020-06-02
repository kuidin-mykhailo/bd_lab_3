import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {CARDS, CONFIG, SKUDS} from "../mock-skuds";
import {Config} from "../config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  getConfig(id: number): Observable<Config> {
    return of(CONFIG.find(config => config.skudId === id));
  }

  addConfig(deviceNumber, driverVersion, ip, submask, gateway): void {
    const lastId = SKUDS.length;
    const newConfig = new Config(lastId, false, deviceNumber, driverVersion, ip, submask, gateway);
    CONFIG.push(newConfig);
    console.log(CONFIG);
  }
}
