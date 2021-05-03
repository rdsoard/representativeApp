import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
	 private fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit():void{
	//this.fbService.getRep(zipcode)).subscribe(representativeData => {
	//this.representative = representativeData;
	//});
  }

}
