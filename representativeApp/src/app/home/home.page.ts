import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
//import { }

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geolocation: Geolocation,private router: Router) { 

  }
  logo='assets/logo.png';
   state:any;
   lat:any;
   longt:any;

  ngOnInit() {
	 
  }

  searchState(){
	  console.log(this.state)
	  this.router.navigate(["/list"],{
		queryParams: this.state});
  }

//this gives the longitude and lattitude
  allowLocation(){
	this.geolocation.getCurrentPosition().then((resp) => {
		this.lat = (resp.coords.latitude);
 		this.longt =(resp.coords.longitude);
     console.log(this.lat + "," + this.longt);
	   }).catch((error) => {
		 console.log('Error getting location', error);
	   });

	//something that gets the state (Ex."SC","TN", "NY") from the coordinates and sets that = to this.state here

  /*  var reverseGeocoder=new BDCReverseGeocode();
    reverseGeocoder.getClientLocation({
      latitude: this.lat,
      longitude: this.longt,
    },function(result) {
      console.log(result);
    }); */



	this.router.navigate(["/list"],this.state);

  }
}
