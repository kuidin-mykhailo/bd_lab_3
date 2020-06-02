import {Skud} from "./skud";
import {Card} from "./card";
import {Config} from "./config";
import {Door} from "./door";
import {User} from "./user";
import {Swipe} from "./swipe";
import {Visits} from "./visits";
import {Time} from "./time";

export const SKUDS: Skud[] = [
  {id: 1, name: 'Skud#1'},
  {id: 2, name: 'Skud#2'}
];

export let CARDS: Card[] = [
  {skudId: 1, id: 1, name: "Misha Kuidin", cardId: "000001", hours: new Time(20, 0, 0, 0), date: new Date("11.11.2000")},
  {skudId: 1, id: 2, name: "Max Pishnevskiy", cardId: "000002", hours: new Time(13, 30, 0, 0), date: new Date("11.11.2000")},
  {skudId: 1, id: 3, name: "Andrey Maluha", cardId: "000003", hours: new Time(12, 24, 0, 0), date: new Date("5.11.2000")},
  {skudId: 1, id: 4, name: "Vlad Lesnich", cardId: "000004", hours: new Time(13, 37, 0, 0), date: new Date("1.11.2000")},
  {skudId: 1, id: 5, name: "Dmitry Sokolov", cardId: "000005", hours: new Time(0, 0, 30, 0), date: new Date("11.11.2000")},
  {skudId: 2, id: 1, name: "Unnamed", cardId: "000001", hours: new Time(20, 0, 0, 0), date: new Date("11.11.2000")}
];

export const CONFIG: Config[] = [
  {
    skudId: 1,
    deviceNumber: 31313,
    deviceStatus: true,
    driverVersion: "V121.22.11",
    ip: "192.168.0.1",
    subnetMask: "255.255.255.1",
    gateway: "192.168.99.12"
  },
  {
    skudId: 2,
    deviceNumber: 22222,
    deviceStatus: false,
    driverVersion: "V121.22.11",
    ip: "192.168.0.2",
    subnetMask: "255.255.255.2",
    gateway: "192.168.99.12"
  },
];

export const DOORS: Door[] = [
  {skudId: 1, doorName: "First Door #1", doorStatus: false},
  {skudId: 1, doorName: "Second Door #1", doorStatus: false},
  {skudId: 2, doorName: "First Door #2", doorStatus: false},
  {skudId: 2, doorName: "Second Door #2", doorStatus: false},
];

export const USERS: User[] = [
  {
    id: "1",
    name: "Mia",
    surname: "Khalifa",
    cardId: "1337",
    password: "kavabanga",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    id: "2",
    name: "Jony",
    surname: "Sens",
    cardId: "200",
    password: "kavabanga",
    imageUrl: "https://pkimgcdn.peekyou.com/b2e10fa9e12515ec1f6775e058b1e2d3.jpeg"
  },
];

export const SWIPES: Swipe[] = [
  {skudId: 1, cardId: "1337", date: new Date("05.04.2020"), recordId: 1, status: "Allow In"},
  {skudId: 1, cardId: "137", date: new Date("05.04.2020"), recordId: 1, status: "Allow In"},
];

export const VISITS: Visits[] = [
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 13, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 5, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 13, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 5, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 13, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 5, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 13, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 5, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 13, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 5, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 14, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 6, 14, 0, 0, 0),
    hours: new Time(4, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 15, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 7, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 16, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 8, 14, 0, 0, 0),
    hours: new Time(0, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 17, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 9, 14, 0, 0, 0),
    hours: new Time(4, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 18, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 10, 15, 0, 0, 0),
    hours: new Time(2, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 19, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 11, 14, 0, 0, 0),
    hours: new Time(5, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 19, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 11, 14, 0, 0, 0),
    hours: new Time(18, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 19, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 11, 14, 0, 0, 0),
    hours: new Time(14, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 19, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 11, 14, 0, 0, 0),
    hours: new Time(12, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 19, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 11, 14, 0, 0, 0),
    hours: new Time(9, 0, 0, 0)
  },
  {
    skudId: 1,
    cardNumber: "1337",
    entryDate: new Date(2020, 4, 20, 10, 0, 0, 0),
    outDate: new Date(2020, 4, 12, 17, 0, 0, 0),
    hours: new Time(7, 0, 0, 0)
  }
];

