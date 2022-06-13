import { NgModule } from '@angular/core';
import {WelcomePageRoutingModule} from './welcome-page-routing.module';
import {WelcomePageComponent} from './welcome-page.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
    imports: [
        WelcomePageRoutingModule,
        LayoutModule,
    ],
  providers: [],
  bootstrap: [WelcomePageComponent]
})
export class WelcomePageModule { }
