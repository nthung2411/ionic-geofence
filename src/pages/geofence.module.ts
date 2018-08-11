import { GeofenceListPage } from './geofence-list/geofence-list';
import { GeofenceDetailPage } from './geofence-detail/geofence-detail';
import { IonicModule } from 'ionic-angular';
import { UuidProvider } from './../providers/uuid.service';
import { NgModule } from '@angular/core';
import { GeofenceProvider } from '../providers/geofencer/geofence.service';

const pages = [
    GeofenceListPage,
    GeofenceDetailPage
]

@NgModule({
    declarations: pages,
    imports: [IonicModule],
    entryComponents: pages,
    providers: [
        GeofenceProvider,
        UuidProvider
    ]
})
export class GeofenceModule { }
