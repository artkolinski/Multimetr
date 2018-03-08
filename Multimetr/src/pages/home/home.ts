import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoundMeter } from '../soundMeter/soundMeter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onLink(url: string) {
      window.open(url);
  }

  navigateToDbMeter(){
      this.navCtrl.push(SoundMeter);
  }
}
