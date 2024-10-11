import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DerechaComponent } from './derecha/derecha.component';
import { IzquierdaComponent } from './izquierda/izquierda.component';
import { CharacterComponent } from "./character/character.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DerechaComponent, IzquierdaComponent, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase';
}
