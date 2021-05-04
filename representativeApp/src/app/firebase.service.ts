import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Representative} from '../app/Representative';
import {Report} from '../app/Report';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	private reports: Observable<Report[]>;
	private reportList: AngularFirestoreCollection<Report>;

  constructor(private afs: AngularFirestore) {
	this.reportList = this.afs.collection<Report>('Report');

	this.reports = this.reportList.snapshotChanges().pipe(
		map(actions => {
		  return actions.map(a => {
			const data = a.payload.doc.data();
			// console.log(data)
			const id = a.payload.doc.id;
			// console.log("run after aadding new node? ")
			return { id, ...data };
		  });
		})
	);
	console.log("data loaded...")
  }

  addReport(Report: Report): Promise<DocumentReference> {
	  return this.reportList.add(Report);
	}

}
