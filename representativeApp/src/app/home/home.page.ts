import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geolocation: Geolocation,private router: Router,private nativeGeocoder: NativeGeocoder) { 

  }

   zipcode:any;
   lat:any;
   longt:any;

  ngOnInit() {
	 
  }

  searchZip(){
	  console.log(this.zipcode)
	  this.router.navigate(["/list"],this.zipcode);
  }

//this gives the longitude and lattitude, need to convert that to a zipcode and set that = to this.zipcode

  allowLocation(){
	this.geolocation.getCurrentPosition().then((resp) => {
		this.lat = (resp.coords.latitude);
 		this.longt =(resp.coords.longitude);
	   }).catch((error) => {
		 console.log('Error getting location', error);
	   });
	
	let options: NativeGeocoderOptions = {
		useLocale: true,
		maxResults: 5
	};

	this.nativeGeocoder.reverseGeocode(this.lat, this.longt, options)
	.then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
	.catch((error: any) => console.log(error));

	this.router.navigate(["/list"],this.zipcode);

  }
}
