import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabContentComponent } from './tab-content/tab-content.component';



@NgModule({
  declarations: [
    TabItemComponent,
    TabGroupComponent,
    TabContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabGroupComponent,
    TabItemComponent
  ],
})
export class TabSystemModule { }
