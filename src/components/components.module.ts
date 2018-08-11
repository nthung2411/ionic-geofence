import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeofenceListItemComponent } from './geofence-list-item/geofence-list-item';
@NgModule({
	declarations: [GeofenceListItemComponent],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [GeofenceListItemComponent]
})
export class ComponentsModule { }
