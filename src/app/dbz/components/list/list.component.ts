import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor( public dbzService:DbzService ){

  }

  @Input()
  public characterList: Character[] =
  [
    {
      name: 'Trunks',
      power:10
    }
  ]


  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?:string):void{
    //todo:  Emitro el id del personajes

    if(!id) return
    console.log(id)
    this.onDelete.emit(id)
  }


}
