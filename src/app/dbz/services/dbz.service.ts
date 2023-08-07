

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
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
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },{
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character ):void{
    this.characters.push(character)
  }

  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1)
  }


}
