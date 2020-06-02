import {Component, Input, OnInit} from '@angular/core';
import {Skud} from "../skud";
import { Router} from "@angular/router";

@Component({
  selector: 'app-skud-navigation',
  templateUrl: './skud-navigation.component.html',
  styleUrls: ['./skud-navigation.component.css']
})
export class SkudNavigationComponent implements OnInit {
  @Input() skud: Skud;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
