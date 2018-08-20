import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component( {
  selector: 'app-live-demo',
  templateUrl: './live-demo.component.html',
  styleUrls: [ './live-demo.component.css' ]
} )
export class LiveDemoComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  constructor( protected _domSanitizer: DomSanitizer ) { }

  ngOnInit() {
  }

  getIframeURL(): any {
    if ( this.url !== undefined ) {
      var securityURL = this._domSanitizer.bypassSecurityTrustResourceUrl( this.url );
      return securityURL;
    }
    return null;
  };

}
