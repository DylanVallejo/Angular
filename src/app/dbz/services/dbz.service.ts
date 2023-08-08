

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

// Injectable es un decorador como  @Component pero
//  injectable lo tratara como servicio


// No importa en cuantos lugares se use el servico siempre
//  y cuando lo inyecte dependencias
//  tendre el valor exacto del momento


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] =
  [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character ):void{
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id:string):void{
    // this.characters.splice(id,1)
    this.characters = this.characters.filter(character => character.id != id)
  }


}
