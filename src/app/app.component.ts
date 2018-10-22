import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-app';
  firstNumber: number = Math.floor((Math.random() * 100) + 1);
  secondNumber: number = Math.floor((Math.random() * 100) + 1);
}
