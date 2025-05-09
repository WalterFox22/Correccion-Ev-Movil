import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: Firestore) { }

  agregarFormulario(data: any) {
    const formularioRef = collection(this.firestore, 'Correccion-evaluacion');
    return addDoc(formularioRef, data);
  }
}
