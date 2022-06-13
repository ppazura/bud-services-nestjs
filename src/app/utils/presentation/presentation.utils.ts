import {Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import InApp from 'detect-inapp';

@Injectable()
export class PresentationUtils {

  public isMobile;
  public inApp = new InApp(navigator.userAgent || navigator.vendor);

  constructor() {

    // console.log(this.inApp.isInApp);
    // console.log(this.inApp.isMobile);

    this.isMobile = this.inApp.isMobile || this.inApp.isInApp;
    fromEvent(window, 'resize').subscribe(e => {
      this.isMobile = ( ( window.innerWidth <= 800 ));
    });
  }

}
