import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PresentationUtils} from '../../utils/presentation/presentation.utils';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicPageComponent implements OnInit {

  constructor(public presentationUtils: PresentationUtils) { }

  get isCollectionPage(): boolean {
    return window.location.pathname === '/collection';
  }

  ngOnInit(): void {}
}
