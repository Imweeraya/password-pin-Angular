import { Component, ViewChild } from '@angular/core';
import { PinComponent } from '../pin/pin.component';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
})
export class ScreenComponent {
  @ViewChild(PinComponent) pinComponent!: PinComponent;

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




}
