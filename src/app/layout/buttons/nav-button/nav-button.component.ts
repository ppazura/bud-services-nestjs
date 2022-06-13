import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {NavButtonReference} from '../../../app.module';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: NavButtonReference, useExisting: forwardRef(() => NavButtonComponent)}
  ]
})
export class NavButtonComponent extends NavButtonReference implements OnInit {

  constructor(public router: Router, private zone: NgZone) {
    super();
  }

  @Input() isOpen: boolean;
  @Input() link: string;
  @Input() isSelected: boolean;

  finishInitComponent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.zone.onStable.subscribe((res) => {
      this.onFinishInitComponent();
    });
  }

  onFinishInitComponent(): void {
    return this.finishInitComponent.emit(true);
  }

}

export interface INavButton {
  isOpen: boolean;
  link: string;
  isSelected: boolean;
  finishInitComponent: Observable<boolean>;
  onFinishInitComponent(): void;
}
