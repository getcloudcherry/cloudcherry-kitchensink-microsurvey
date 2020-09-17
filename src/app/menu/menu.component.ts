import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.scss' ]
} )
export class MenuComponent implements OnInit {
  @Input() title: string; //Selected Title
  menuOptions: Section[] = [
    {
      name: 'Introduction',
      path: '/intro',
      icon: 'home'
    },/*
    {
      name: 'Position',
      path: '/position',
      icon: 'location_searching'
    },*/
    {
      name: 'Methods',
      path: '/methods',
      icon: 'build'
    },
    {
      name: 'Events',
      path: '/events',
      icon: 'settings_input_component'
    },
    {
      name: 'Triggers',
      path: '/triggers',
      icon: 'touch_app'
    },
    {
      name: 'Dynamic Prefills',
      path: '/dynamicprefills',
      icon: 'bookmark'
    },
    {
      name: 'FAQs',
      path: '/faq',
      icon: 'contact_support'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

export interface Section {
  name: string;
  path: string;
  icon: string;
}
