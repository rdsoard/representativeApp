import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private geolocation: Geolocation,private router: Router) { }
   

  ngOnInit() {
	 
  }

  allowLocation(){
	this.geolocation.getCurrentPosition().then((resp) => {
		// resp.coords.latitude
		// resp.coords.longitude
	   }).catch((error) => {
		 console.log('Error getting location', error);
	   });
	   
	   let watch = this.geolocation.watchPosition();
	   watch.subscribe((data) => {
		// data can be a set of coordinates, or an error (if an error occurred).
		// data.coords.latitude
		// data.coords.longitude
		
	   });
	   this.router.navigate(["/list"]);

  }
}
