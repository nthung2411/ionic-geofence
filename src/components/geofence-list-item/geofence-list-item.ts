import { GeofenceProvider } from 'providers/geofencer/geofence.service';
import { Geofence } from './../../models/geofence';
import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Generated class for the GeofenceListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'geofence-list-item',
  templateUrl: 'geofence-list-item.html'
})
export class GeofenceListItemComponent {

  @Input() geofence: Geofence;
  @Output() onItemTapped: EventEmitter<any> = new EventEmitter();

  constructor(private geofenceService: GeofenceProvider) {

  }

  get header() {
    return this.geofence.notification.text;
  }

  get details() {
    return `When ${this.transitionTypeText} within ${this.geofence.radius}m`;
  }

  get transitionTypeText() {
    switch (this.geofence.transitionType) {
      case 1: return "entering region";
      case 2: return "exiting region";
      case 3: return "entering or exiting region";
    }
  }

  itemTapped() {
    this.onItemTapped.emit(null);
  }

  remove() {
    this.geofenceService.remove(this.geofence);
  }

}
