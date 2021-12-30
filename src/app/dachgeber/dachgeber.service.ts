import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dachgeber } from '../dachgeber';

@Injectable({
  providedIn: 'root'
})
export class DachgeberService {

  constructor(
    private readonly firestore: Firestore,
  ) { }

  get dachgebers$(): Observable<Dachgeber[]> {
    const dachgebersRef = collection(this.firestore, 'Dachgebers');
    return collectionData(dachgebersRef) as Observable<Dachgeber[]>;
  }
}
