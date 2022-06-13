import {
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
  selector: 'app-redirect-button',
  templateUrl: './redirect-button.component.html',
  styleUrls: ['./redirect-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: NavButtonReference, useExisting: forwardRef(() => RedirectButtonComponent)}
  ]
})

export class RedirectButtonComponent extends NavButtonReference implements OnInit {

  @Input() isOpen: boolean;
  @Input() link: string;
  @Input() redirect: string;
  @Input() isSelected: boolean;
  finishInitComponent: EventEmitter<boolean> = new EventEmitter();

  constructor(public router: Router, private zone: NgZone) {
    super();
  }

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
