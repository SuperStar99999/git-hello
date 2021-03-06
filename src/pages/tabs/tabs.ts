import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from 'ionic-native';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = '';
  tab2Title = '';
  tab3Title = '';
  tab4Title = '';
  tab5Title = '';
  userProfile:any;

  constructor(public navCtrl: NavController) {

  }
}
