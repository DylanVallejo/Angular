import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string  = "ironman";
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Batman"
  }

  changeAge():void{
    this.age = 40
  }
  resetForm():void {
    // this.name = "Ironamn";
    this.age = 45;
    // ay que tener cuidado con codigo que manipula el dom con js directamente
    document.querySelectorAll('h1').forEach(
      element =>{
        element.innerHTML = '<h1>Hola desde angular manipulando dom </h1>';
      }
    )
  }

}
