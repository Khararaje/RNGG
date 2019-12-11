import { Component } from '@angular/core';
import { Vibration, VibrationOriginal } from '@ionic-native/vibration';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  randInt;
  answer;
  constructor(private vibration: VibrationOriginal){}
myval: number = null;
myval1: number = null;
  generate(){
    this.randInt = Math.ceil(Math.random() * 10)
  }
  refresh(){
    this.myval1 = this.myval;
  }
  compare(myval){
    if (this.myval == this.randInt){
      this.vibration.vibrate(1000);
      alert("Congrats you guessed correctly! Click 'OK' then 'Start' to restart")
    
    }
    else{
      this.vibration.vibrate(500);
      alert("Wrong!! The correct answer was " + this.randInt + ". Click ok then start to try again ");
    }
  }

}
