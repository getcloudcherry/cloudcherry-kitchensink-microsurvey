import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: [ './triggers.component.css' ]
} )
export class TriggersComponent implements OnInit {
  title: string = "Triggers";
  triggers: trigger[] = [
    {
      title: "Time Spent",
      description: "The number of seconds Micro Survey should wait before it gets triggered to collect feedback from customers.",
      url: "//jsfiddle.net/femilshajin/h3apyL89/embedded/result/"
    },
    {
      title: "Keep Questions In View",
      description: "Make the Micro Survey to appear in the view for a limited time period (Let’s say 30 seconds). This will ensure that the customer’s browsing experience doesn’t get affected as the Micro Survey will disappear once the customer doesn’t attempt to answer the questions after set number of seconds.",
      url: "//jsfiddle.net/femilshajin/pqbh6guf/embedded/result/"
    },
    {
      title: "Present Again/After",
      description: "We’ll be configuring more than 1 Micro Survey in a website. In case if a Micro Survey has loaded on a certain condition and the customer has submitted a feedback, then the next Micro Survey will start only after the set number of seconds.",
      url: "//jsfiddle.net/femilshajin/68rgqcfk/embedded/result/"
    },
    {
      title: "URL Contains",
      description: " The Micro Survey session will get triggered on a URL (web page where the customer is browsing) where the key word is present. (For Ex: The key words could be ‘Mobile’, ‘Flights’, ‘International’, ‘Products’ etc).",
      url: null
    },
    {
      title: "URL Doesn't Contains",
      description: "The Micro Survey session will get triggered on all URLs (Web page where the customer is browsing) except the page that contains a key word. (For Ex: The key words could be ‘Discounts’, ‘Promotion’, ‘Special offers’ etc)",
      url: null
    },
    {
      title: "Number Of Clicks",
      description: "The Number of clicks on the web page after which the Micro Survey session should get enabled.",
      url: "//jsfiddle.net/femilshajin/p3nmrcav/embedded/result/"
    },
    {
      title: "Scroll",
      description: "The Micro Survey session gets triggered once the customer scrolls beyond a certain percentage of the entire webpage (Let’s say 70%).",
      url: "//jsfiddle.net/femilshajin/be8my0az/embedded/result/"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface trigger {
  title: string;
  description: string,
  url: string;
}
