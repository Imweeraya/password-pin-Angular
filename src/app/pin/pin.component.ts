import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})

export class PinComponent {

realPassword : string;
isLock = true;

@Output() passwordEntered: EventEmitter<number[]> = new EventEmitter();
password : number[] = [];

constructor(){
  this.realPassword = "1234";
  this.isLock = true;
  this.password = [];
}

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

@Output() sendLock: EventEmitter<boolean> = new EventEmitter();

check(){
  const numbersAsString: string = this.password.join('');
  if(this.realPassword == numbersAsString){
    this.isLock = false;
    this.sendLock.emit(this.isLock);
  }else{
    this.password = [];
    this.sendLock.emit(this.isLock);
  }
}

}
