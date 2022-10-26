import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Tab } from '../models/tab';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { TabManagerService } from '../tab-manager.service';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  @ViewChild('vcrTab', {read: ViewContainerRef}) vcrTab!: ViewContainerRef;


  @ViewChild('vcr', {read: ViewContainerRef}) vcr!: ViewContainerRef;


  tabRefs: Tab[] = [];

  constructor(private manager: TabManagerService) { }

  ngOnInit(): void {
  }

  addTab() {
    if(this.vcrTab) {
      this.disableAll();
      const tabRef = this.vcrTab.createComponent(TabItemComponent);
      tabRef.instance.tab.id = Math.floor(Math.random() * 100);
      tabRef.instance.click.subscribe((data)=>{
        this.disableAll();
        this.setActive(tabRef)
      });
      tabRef.instance.close.subscribe((data)=>{
          this.disableAll();
          this.destroy(tabRef);
      })
      const tabRefContent = this.vcrTab.createComponent(TabContentComponent);
      tabRefContent.instance.content = tabRef.instance.tab.label+" : "+ tabRef.instance.tab.id;
      this.manager.addRef(tabRef, tabRefContent);
      this.setActive(tabRef);
    }
  }

  disableAll() {
    this.manager.disableAll();
    if(this.vcr)
      while(this.vcr.length > 0) this.vcr.detach();
  }

  setActive(key: any) {
    this.manager.setActive(key);
    this.vcr.insert(this.manager.findRef(key).hostView)
  }

  destroy(key: any) {
    let newKey =  this.manager.getPreviousTab(key);
    this.setActive(newKey);
    key.destroy();
}


}


