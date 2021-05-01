import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geolocation: Geolocation) { }

  this.geolocation.getCurrentPosition().then((resp) => {
	// resp.coords.latitude
	// resp.coords.longitude
   }).catch((error) => {
	 console.log('Error getting location', error);
   });
   

  ngOnInit() {
  }

}
