import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DynamicPrefillsComponent } from './dynamic-prefills/dynamic-prefills.component';
import { EventsComponent } from './events/events.component';
import { MethodsComponent } from './methods/methods.component';
import { TriggersComponent } from './triggers/triggers.component';
import { IntroductionComponent } from './introduction/introduction.component';

import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatCardModule
} from '@angular/material';
import { LiveDemoComponent } from './live-demo/live-demo.component';
import { PositionComponent } from './position/position.component';
import { HeaderComponent } from './header/header.component';
import { FAQComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule( {
  declarations: [
    AppComponent,
    MenuComponent,
    DynamicPrefillsComponent,
    EventsComponent,
    MethodsComponent,
    TriggersComponent,
    IntroductionComponent,
    LiveDemoComponent,
    PositionComponent,
    HeaderComponent,
    FAQComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
