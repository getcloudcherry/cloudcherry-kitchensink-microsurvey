import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: [ './position.component.css' ]
} )
export class PositionComponent implements OnInit {
  title: string = "Position";
  url: string = "//jsfiddle.net/femilshajin/thdayju7/embedded/result/";
  constructor() { }

  ngOnInit() {
  }

}
