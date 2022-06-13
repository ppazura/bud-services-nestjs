import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() showLogo = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

}
