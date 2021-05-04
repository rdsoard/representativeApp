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
	private reps: Observable<Representative[]>;
	private repList: AngularFirestoreCollection<Representative>;

  constructor(private afs: AngularFirestore) {
	this.reportList = this.afs.collection<Report>('Report');
	this.reports = this.reportList.snapshotChanges().pipe(
		map(actions => {
		  return actions.map(a => {
			const data = a.payload.doc.data();
			const id = a.payload.doc.id;
			return { id, ...data };
		  });
		})
	);

	console.log("data loaded...")
  }

  getReps(s) {
	this.repList = this.afs.collection<Representative>('representative',ref => ref.where('state', '==', s));
	this.reps = this.repList.snapshotChanges().pipe(
		map(actions => {
		  return actions.map(a => {
			const data = a.payload.doc.data();
			const id = a.payload.doc.id;
			return { id, ...data };
		  });
		})
	);
	return this.reps;
  }

  addReport(Report: Report): Promise<DocumentReference> {
	  return this.reportList.add(Report);
	}
	getReports(): Observable<Report[]> {
		return this.reports;
	}

	likesUp(id,amt){
		this.reportList.doc(id).update({like: amt+1});
	}

	likesDown(id,amt){
		if(amt != 0){
			this.reportList.doc(id).update({like: amt-1});
		}
	}

	dislikesUp(id,amt){
		this.reportList.doc(id).update({dislike: amt+1});
	}

	dislikesDown(id,amt){
		if(amt != 0){
			this.reportList.doc(id).update({dislike: amt-1});
		}
	}

}
