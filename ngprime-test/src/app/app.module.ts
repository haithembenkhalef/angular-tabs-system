import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

import {TabViewModule} from 'primeng/tabview';
import { DynamicCompDirective } from './dynamic-comp.directive'
import {MenubarModule} from 'primeng/menubar';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { TabSystemModule } from './tab-system/tab-system.module';




@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DynamicCompDirective,
    Route1Component,
    Route2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    MessageModule,
    MenubarModule,
    AppRoutingModule,
    TabSystemModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
