import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geolocation: Geolocation,private router: Router) { 

  }

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
	   }).catch((error) => {
		 console.log('Error getting location', error);
	   });

	//something that gets the state (Ex."SC","TN", "NY") from the coordinates and sets that = to this.state here

	this.router.navigate(["/list"],this.state);

  }
}
