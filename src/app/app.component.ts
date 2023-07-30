import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Mi primer app en Angular';
  public counter:number = 1;
  increaseBy(value : number):void{
    this.counter += value;
  }
  decreaseBy(value : number):void{
    if(this.counter > 1){
      console.log(value)
      this.counter -= value;

    }else{
      alert('No puedes restar mas de uno')
    }
  }
  reset():void{
    this.counter = 1
  }
}
