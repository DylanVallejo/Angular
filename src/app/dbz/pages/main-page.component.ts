import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
// import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent  {

  // en el constructor definiremos la inyecion de
  // dependencias
  constructor( public dbzService:DbzService ){
    
  }

}
