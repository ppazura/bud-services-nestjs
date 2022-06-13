import { NgModule } from '@angular/core';
import {BasicPageRoutingModule} from './basic-page-routing.module';
import { BasicPageComponent } from './basic-page.component';
import {CommonModule} from '@angular/common';
import {LayoutModule} from '../../layout/layout.module';
import {PresentationUtils} from '../../utils/presentation/presentation.utils';

@NgModule({
  declarations: [
    BasicPageComponent
  ],
    imports: [
        LayoutModule,
        BasicPageRoutingModule,
        CommonModule,
    ],
    providers: [
        PresentationUtils
    ]
})
export class BasicPageModule {
  constructor() {}

}
