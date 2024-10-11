import { Component, inject, OnInit } from '@angular/core';
import { OnePieceService } from '../services/one-piece.service';
import { CharacterInterface } from '../interfaces/character-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit  {
  public serviceCharacter = inject(OnePieceService);
  character : CharacterInterface[] = [] ;

  character$ = this.serviceCharacter.getCharacter();

  ngOnInit(): void {
    /*this.serviceCharacter.getCharacter().subscribe(res=>{
      this.character = res;
    });*/
  }
}
