import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseService} from '../firebase.service';
import { Representative } from '../Representative';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	
	private reps: Observable<Representative[]>;
	state: any;

  constructor(private activatedRoute: ActivatedRoute,
	 private fbService: FirebaseService, private router: Router,
	 private callNumber: CallNumber) { 		 
		this.activatedRoute.queryParams.subscribe((res)=>{
			this.state = res[0]+res[1];
		});
	 }

  ngOnInit() {
  }
  ngAfterViewInit():void{
	this.reps = this.fbService.getReps(this.state);
  }
  
  goToReports() {
	this.router.navigate(['/report']);
  }

  makeCall(repNum){
	this.callNumber.callNumber(repNum, true)
	.then(res => console.log('Launched dialer!', res))
	.catch(err => console.log('Error launching dialer', err));
  }

}
