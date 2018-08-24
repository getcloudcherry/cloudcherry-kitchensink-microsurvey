import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { PositionComponent } from './position/position.component';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';
import { TriggersComponent } from './triggers/triggers.component';
import { DynamicPrefillsComponent } from './dynamic-prefills/dynamic-prefills.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    component: IntroductionComponent
  },
  {
    path: 'position',
    component: PositionComponent
  },
  {
    path: 'methods',
    component: MethodsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'triggers',
    component: TriggersComponent
  },
  {
    path: 'dynamicprefills',
    component: DynamicPrefillsComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forRoot( routes, { useHash: true, preloadingStrategy: PreloadAllModules } )
  ],
  exports: [ RouterModule ],
  declarations: []
} )
export class AppRoutingModule { }
