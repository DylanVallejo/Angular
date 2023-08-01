// import { CounterComponent } from './counter.component';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Counter : {{ counter }}
    </h3>

    <button (click)="increaseBy(1)">
      Boton +1
    </button>
    <button (click)="reset()">
      Reset
    </button>
    <button (click)="decreaseBy(1)">
      Boton -1
    </button>
    <hr>
  `
})

export class  CounterComponent{

  public counter:number = 1;
  increaseBy(value : number):void{
    this.counter += value;
  }
  decreaseBy(value : number):void{
    if(this.counter > 1){
      this.counter -= value;
    }else{
      alert('No puedes restar mas de uno')
    }
  }
  reset():void{
    this.counter = 1
  }
}
