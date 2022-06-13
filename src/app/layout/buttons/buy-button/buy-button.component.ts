import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuyButtonComponent implements OnInit {

  @Input() id: string;

  @Input() text: string;
  @Input() redirect: string;

  constructor() {
  }

  ngOnInit(): void {

  }
}

