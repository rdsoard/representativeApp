import { Component, OnInit } from '@angular/core';
import {Report} from '../Report';
import {FirebaseService} from '../firebase.service';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
})
export class MakeReportPage implements OnInit {
  report: Report = {
	problem: '',
	notes: '',
	like: 0,
	dislike: 0
  };
  
  constructor(private fbService: FirebaseService,
	//public afAuth: AngularFireAuth,
	private router: Router) { }

  ngOnInit() {
  }

  addReport(){
	this.fbService.addReport(this.report).then((doc) => {
		console.log(doc);
		this.router.navigateByUrl('/');
	  }, err => {
	  });
  }
}
