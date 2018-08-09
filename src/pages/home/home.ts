import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '@env/environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public environment = environment;
  constructor(public navCtrl: NavController) {
    console.log(`cordova`, this.environment.cordova);
    console.log(`window`, this.environment.window)
  }

}
