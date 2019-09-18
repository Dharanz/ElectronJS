import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplemath',
  templateUrl: './simplemath.component.html',
  styleUrls: ['./simplemath.component.css']
})
export class SimplemathComponent implements OnInit {

  resultData = 0;

  constructor() { }

  ngOnInit() {
  }

  add(val1, val2) {
    this.resultData = parseInt(val1) + parseInt(val2);
  }

  sub(val1, val2) {
    this.resultData = val1 - val2;
  }

  mul(val1, val2) {
    this.resultData = val1 * val2;
  }

  div(val1, val2) {
    this.resultData = val1 / val2;
  }
}
