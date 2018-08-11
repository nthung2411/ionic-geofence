import { Geofence } from './../../models/geofence';
import { GeofenceDetailPage } from '../geofence-detail/geofence-detail';
import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { GeofenceProvider } from '../../providers/geofence.service';
import { environment } from '@env/environment';

/**
 * Generated class for the GeofenceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geofence-list',
  templateUrl: 'geofence-list.html',
})
export class GeofenceListPage implements OnInit {

  private environment = environment;
  public isLoading: boolean = false;
  public geofences: Geofence[];

  constructor(
    private nav: NavController,
    private geofenceService: GeofenceProvider,
    private platform: Platform,
    private menu: MenuController
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    await this.platform.ready();
    if (!this.environment.isCordova) { return; }

    this.geofenceService.findAll()
      .then(geofences => {
        this.geofences = geofences;
        this.isLoading = false;
      })
      .catch(() => this.isLoading = false);
  }

  ionViewDidEnter() {
    this.menu.enable(true);
  }

  addNewGeofence() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const geofence = this.geofenceService.create({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });

        this.transitionToDetailsPage(geofence);
      },
      (error) => {

      },
      { timeout: 5000 }
    );
  }

  geofenceItemTapped(geofence) {
    this.transitionToDetailsPage(geofence);
  }

  transitionToDetailsPage(geofence) {
    this.nav.push(GeofenceDetailPage, {
      geofence
    })
  }

}
