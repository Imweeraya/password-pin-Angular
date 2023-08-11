import { Component, ViewChild } from '@angular/core';
import { PinComponent } from '../pin/pin.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent {
  @ViewChild(PinComponent) pinComponent!: PinComponent;

  lock = true;

  hiddenPassword = ['○','○','○','○'];

  receivedPassword: number[] = [];

  onPasswordEntered(password: number[]) {
    this.receivedPassword = password;
    console.log('Received Password:', this.receivedPassword);
    // Perform actions with the received password
  }

  addDot(){
    this.hiddenPassword.pop();
    this.hiddenPassword.unshift('●');
    console.log(this.hiddenPassword)
  }

  removeDot(){
    this.hiddenPassword.shift();
    this.hiddenPassword.push('○');
    console.log(this.hiddenPassword)
  }

  setLock(locked:boolean){
    this.lock = locked;
    this.checkLock();
  }

  checkLock(){
    if(this.lock == true){
      this.hiddenPassword = ['○','○','○','○'];
    }else{
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
  }


}
