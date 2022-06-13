import {Directive, ElementRef, Input, ViewContainerRef} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NavButtonReference} from '../../app.module';

@Directive({
  selector: '[appMarkAsSelected]'
})
export class MarkAsSelectedDirective {

  constructor(private el: ElementRef, private host: NavButtonReference, private router: Router) {
    this.host.finishInitComponent.subscribe(() => {
      this.addClass();
      this.deleteClass();
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.addClass();
      this.deleteClass();
    });

  }

  private addClass(): void {
    if (`/${this.host.link}` !== '/' && this.router.url.includes(`/${this.host.link}`)) {
      this.el.nativeElement.querySelector('.label').classList.add('selected');
    };
  }

  private deleteClass(): void {
    if (`/${this.host.link}` !== '/' && !this.router.url.includes(`/${this.host.link}`)) {
      this.el.nativeElement.querySelector('.label').classList.remove('selected');
    }
  }

}
