import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TabItemComponent,
    TabGroupComponent,
    TabContentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TabGroupComponent,
    TabItemComponent
  ],
})
export class TabSystemModule { }
