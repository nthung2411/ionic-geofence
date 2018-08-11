import { GeofenceModule } from './../pages/geofence.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from './../pages/home/home';
import { MyApp } from './app.component';

const pages = [
  MyApp,
  HomePage
];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    GeofenceModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
