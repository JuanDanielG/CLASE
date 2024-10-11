import { Injectable } from '@angular/core';
import { Mensaje } from '../interface/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  mensajes : Mensaje[] = [{msn: 'Hola!!', author: 'izquierda'}];

  constructor() { }

  addMensaje (msn : String , author : String){
    this.mensajes.push({msn:msn , author : author})
    
  }  
}
