import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})

export class PinComponent {

realPassword = "1234";

password : number[] = [];

@Output() passwordEntered: EventEmitter<number[]> = new EventEmitter();
@Output() pinButtonEven = new EventEmitter<() => void>();

pinButton(num : number){
  if(this.password.length < this.realPassword.length){
    this.password.push(num);
    this.passwordEntered.emit(this.password);
    this.pinButtonEven.emit();
  }
  console.log(this.password);
}

@Output() deleteEven = new EventEmitter<() => void>();

delete(){
  this.password.pop();
  this.passwordEntered.emit(this.password);
  this.deleteEven.emit();
  console.log(this.password);
}

}
