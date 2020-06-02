import {Component, Input, OnInit} from '@angular/core';
import {Skud} from "../skud";

@Component({
  selector: 'app-skud-detail',
  templateUrl: './skud-detail.component.html',
  styleUrls: ['./skud-detail.component.css']
})
export class SkudDetailComponent implements OnInit {

  @Input() skud: Skud;
  constructor() { }

  ngOnInit(): void {
  }

}
