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

  ngOnInit() {
	  this.reports = this.fbService.getReports();
  }

  goHome() {
	this.router.navigate(['/']);
  }

  writeReport() {
	this.router.navigate(['/make-report']);
  }

}
