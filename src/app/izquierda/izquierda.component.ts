import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-izquierda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './izquierda.component.html',
  styleUrl: './izquierda.component.scss'
})
export class IzquierdaComponent {
  mensaje : String = '';
  public mensajeService = inject(ChatService);
  
  //constructor (public mensajeService: ChatService){ }

  onSubmit(){
    this.mensajeService.addMensaje(this.mensaje, "derecha")
    this.mensaje = ""
  }
}
