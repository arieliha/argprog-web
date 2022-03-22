import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  result: number;
  userresult: string;
  showEnter = false;
  constructor() { }

  ngOnInit(): void {
    this.num1 = this.randomIntFromInterval(10, 20);
    this.num2 = this.randomIntFromInterval(1, 10);

    this.result = this.num1 - this.num2;

  }

  validate(): void {

    if(this.result === parseInt(this.userresult)){
      this.showEnter = true;
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  setUserResult(any: any) {
    console.log(any);
  }

}
