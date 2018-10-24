import { Component, OnInit } from '@angular/core';
import { getRandomNumber } from '../../helper';


@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css'],
})

export class FlashCardComponent implements OnInit {
  a = getRandomNumber();
  b = getRandomNumber();

  ngOnInit() {
  }

}


 