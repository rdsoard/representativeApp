import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Representative} from '../app/Representative';
import {Report} from '../app/Report';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
