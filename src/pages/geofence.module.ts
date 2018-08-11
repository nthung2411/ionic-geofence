import { UuidProvider } from './../providers/uuid.service';
import { GeofenceProvider } from './../providers/geofence.service';
import { ComponentsModule } from './../components/components.module';
import { GeofenceListPage } from './geofence-list/geofence-list';
import { GeofenceDetailPage } from './geofence-detail/geofence-detail';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const pages = [
    GeofenceListPage,
    GeofenceDetailPage
]

@NgModule({
    declarations: pages,
    imports: [
        CommonModule,
        HttpClientModule,
        ComponentsModule,
        IonicModule
    ],
    entryComponents: pages,
    providers: [
        GeofenceProvider,
        UuidProvider
    ]
})
export class GeofenceModule { }
