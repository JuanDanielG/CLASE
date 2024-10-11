import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal,computed } from '@angular/core';
import { Observable } from "rxjs";
import { CharacterInterface } from '../interfaces/character-interface';
@Injectable({
  providedIn: 'root'
})
export class OnePieceService {
  private readonly _endPoint = "https://api.api-onepiece.com/v2";
  private _http = inject(HttpClient);

  //señales
  #state = signal<CharacterInterface[]>([]);

  public personaje = computed(()=> this.#state());

  constructor() {
    this._http.get<CharacterInterface[]>(`${this._endPoint}/characters/en`).subscribe(res=>{
      this.#state.set(res);  //pasarle los datos a la señal
    });
  }

  getCharacter(): Observable<CharacterInterface[]> {
    return this._http.get<CharacterInterface[]>(`${this._endPoint}/characters/en`)  //llamamos a la petición
  }
}

