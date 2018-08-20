import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: [ './methods.component.css' ]
} )
export class MethodsComponent implements OnInit {
  title: string = "Methods";
  url: string = "//jsfiddle.net/femilshajin/6y4jqspf/embedded/result/";

  constructor() { }

  ngOnInit() {
  }

}
