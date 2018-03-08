import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-soundMeter',
  templateUrl: 'soundMeter.html'
})
export class SoundMeter {

  actualdB: string;
  subscription;
  constructor(public navCtrl: NavController, private dbMeter: DBMeter, private ref: ChangeDetectorRef) {
    this.actualdB = "0";
  }

  startListening(){
    this.subscription = this.dbMeter.start().subscribe((data) => {
        this.actualdB = data;
        console.log(data);
        this.ref.detectChanges();
      }
    );
  }

  checkIsListenig(){
    this.dbMeter.isListening().then(
      (isListening: boolean) => console.log(isListening)
    );
  }

  stopListening(){
    this.subscription.unsubscribe();
  }

  clearMemory(){
    this.dbMeter.delete().then(
      () => console.log('Deleted DB Meter instance'),
      error => console.log('Error occurred while deleting DB Meter instance')
    );
  }
}
