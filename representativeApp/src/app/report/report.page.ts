import { Component, OnInit } from '@angular/core';
import {Report} from '../Report';
import {FirebaseService} from '../firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private fbService: FirebaseService,
	public afAuth: AngularFireAuth,
	private router: Router) { }
	private reports: Observable<Report[]>;
	l: boolean;
	d: boolean;

  ngOnInit() {
	  this.reports = this.fbService.getReports();
	  this.l = false;
	  this.d = false;
  }

  goHome() {
	this.router.navigate(['/']);
  }

  writeReport() {
	this.router.navigate(['/make-report']);
  }

  like(id,amt){
	if(this.l == false){
		this.fbService.likesUp(id,amt)
		this.l = true
	}
	else {
		this.fbService.likesDown(id,amt)
		this.l = false
	}
  }

  dislike(id,amt){
	if(this.d == false){
		this.fbService.dislikesUp(id,amt)
		this.d = true
	}
	else {
		this.fbService.dislikesDown(id,amt)
		this.d = false
	}
  }

}
