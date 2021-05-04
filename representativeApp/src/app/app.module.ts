import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AngularFireModule } from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbDpH02fMX3zhX4Q8qhQEQPwzW_7j3DeI",
    authDomain: "representativeapp.firebaseapp.com",
    projectId: "representativeapp",
    storageBucket: "representativeapp.appspot.com",
    messagingSenderId: "239284247750",
    appId: "1:239284247750:web:2d6a2af91d216d1408cbc7",
    measurementId: "G-TJSCYKPKJT"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [CallNumber,Geolocation,NativeGeocoder,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
