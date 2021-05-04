import { Component, OnInit } from '@angular/core';
import {Report} from '../Report';
import {FirebaseService} from '../firebase.service';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private fbService: FirebaseService,
	//public afAuth: AngularFireAuth,
	private router: Router) { }

	report: Report = {
		problem: '',
		notes: '',
		like: 0,
		dislike: 0
	  };

  ngOnInit() {
  }

  writeReport() {
	this.router.navigate(['/make-report']);
  }

}
