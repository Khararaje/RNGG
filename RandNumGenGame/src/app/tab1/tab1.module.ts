import { IonicModule  } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {NavController } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
@Component({
  selector: "page-home",
  templateUrl: "tabs.page.html" //home.html
})
export class Tab1PageModule {
  randInt;
  constructor(public navCtrl: NavController){

  }
  getRand(){
    this.randInt = Math.floor(Math.random() * 10)
    }
}
