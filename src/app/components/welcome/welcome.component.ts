import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  result: number;
  userresult: string;
  password: string;
  passwordset: string = "loop2022";
  showEnter = false;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.num1 = this.randomIntFromInterval(10, 20);
    this.num2 = this.randomIntFromInterval(1, 10);

    this.result = this.num1 - this.num2;

  }

  validate(): void {

    if(this.result === parseInt(this.userresult) && (this.passwordset === this.password)){
      // this.showEnter = true;
      this.router.navigate(['/argProgMain']);

    } else {
      alert("login incorrecto");
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setUserResult(any: any) {
    console.log(any);
  }

}
