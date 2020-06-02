import { Component, OnInit } from '@angular/core';
import {Door} from "../door";
import {DoorService} from "../services/door.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  door: Door[];

  constructor(private doorService: DoorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDoors();
  }

  getDoors(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doorService.getDoors(id)
      .subscribe(door => this.door = door);
  }

}
