import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';
import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';
import { IonInput} from '@ionic/angular/standalone';
import { IonCheckbox} from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { ChatService } from '../services/chat.service'
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonDatetime, IonItem, IonList, IonSelect, IonSelectOption, IonText,
    IonInput,IonCheckbox,IonButton,FormsModule, NgIf, NgFor

  ],
})
export class HomePage {

  nombre = '';
  apellido = '';
  edad: number | null = null;
  email = '';
  telefono = '';
  fruta = '';
  fecha = '';
  esEstudiante = false;
  esMaestro = false;

  constructor(private chatService: ChatService) {}

  enviarFormulario() {
    const data = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      email: this.email,
      telefono: this.telefono,
      fruta: this.fruta,
      fecha: this.fecha,
      estudiante: this.esEstudiante,
      maestro: this.esMaestro
    };

    this.chatService.agregarFormulario(data)
      .then(() => {
        console.log('Formulario enviado con éxito');
      })
      .catch(err => {
        console.error('Error al enviar formulario', err);
      });
  }


}
