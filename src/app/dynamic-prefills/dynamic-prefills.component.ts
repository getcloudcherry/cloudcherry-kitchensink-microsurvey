import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-dynamic-prefills',
  templateUrl: './dynamic-prefills.component.html',
  styleUrls: [ './dynamic-prefills.component.css' ]
} )
export class DynamicPrefillsComponent implements OnInit {
  title: string = "Dynamic Prefills";
  url: string = "//jsfiddle.net/femilshajin/6hLmeqov/embedded/result/";
  constructor() { }

  ngOnInit() {
  }

}
