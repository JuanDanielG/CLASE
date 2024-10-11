import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-derecha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './derecha.component.html',
  styleUrl: './derecha.component.scss'
})
export class DerechaComponent {
mensaje : String = '';
public mensajeService = inject(ChatService);

  onSubmit(){
    this.mensajeService.addMensaje(this.mensaje, "izquierda")
    this.mensaje = ""
  }
}
