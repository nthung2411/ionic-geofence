import { SplashScreen } from '@ionic-native/splash-screen';
import { GeofenceListPage } from '../geofence-list/geofence-list';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular/umd';
import { environment } from '@env/environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public environment = environment;

  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen) { }

  async ionViewDidEnter() {
    await this.platform.ready();
    console.log(`cordova`, this.environment.cordova);
    console.log(`window`, this.environment.window);
    this.splashScreen.hide();
  }

  public goGeoList() {
    this.navCtrl.push(GeofenceListPage);
  }

}
