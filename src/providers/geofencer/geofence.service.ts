import { UuidProvider } from '../uuid.service';
import { HttpClient } from '@angular/common/http';
import { Geofence } from 'models/geofence';
import { environment } from '@env/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class GeofenceProvider {
  private geofences: Geofence[];
  private window: any;

  /**
   *
   */
  constructor(private http: HttpClient,
    private uuidProvider: UuidProvider) {
    this.window = environment.window;
    this.getGeofences();
  }

  public getGeofences() {
    this.http.get(`assets/data/geofences.mock.json`).subscribe(
      (res: Geofence[]) => {
        this.geofences = res;
      },
      error => {
        console.error(error);
      }
    );
  }

  public create(attributes) {
    const defaultGeofence = <Geofence>{
      id: this.uuidProvider.generateUUID(),
      latitude: 50,
      longitude: 50,
      radius: 1000,
      transitionType: this.window.TransitionType.ENTER,
      notification: {
        id: this.getNextNotificationId(),
        title: "Ionic geofence example",
        text: "",
        icon: "res://ic_menu_mylocation",
        openAppOnClick: true,
      },
    };

    return Object.assign(defaultGeofence, attributes);
  }

  public clone(geofence: Geofence) {
    return JSON.parse(JSON.stringify(geofence));
  }

  public addOrUpdate(geofence: Geofence) {
    return this.window.geofence.addOrUpdate(geofence)
      .then(() => this.findById(geofence.id))
      .then((found) => {
        if (!found) {
          this.geofences.push(geofence);
        } else {
          const index = this.geofences.indexOf(found);

          this.geofences[index] = geofence;
        }
      });
  }

  public findAll() {
    return this.window.geofence.getWatched()
      .then((geofencesJson) => {
        const geofences = JSON.parse(geofencesJson);

        this.geofences = geofences;
        return geofences;
      });
  }

  public findById(id) {
    const found = this.geofences.filter(g => g.id === id);

    if (found.length > 0) {
      return found[0];
    }

    return undefined;
  }

  public removeAll() {
    return this.window.geofence.removeAll().then(() => {
      this.geofences.length = 0;
    });
  }

  public remove(geofence) {
    return this.window.geofence.remove(geofence.id).then(() => {
      this.geofences.splice(this.geofences.indexOf(geofence), 1);
    });
  }

  private getNextNotificationId(): number {
    let max = 0;

    this.geofences.forEach(function (geofence) {
      if (geofence.notification && geofence.notification.id) {
        if (geofence.notification.id > max) {
          max = geofence.notification.id;
        }
      }
    });

    return max + 1;
  }
}
