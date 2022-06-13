import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment';
import {LOCATION_INITIALIZED} from '@angular/common';
import {Observable} from 'rxjs';
import {INavButton} from './layout/buttons/redirect-button/redirect-button.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.domain + '/assets/i18n/', '.json?cacheBuster=' + Date.now());
}

export function appInitializerFactory(translate: TranslateService, injector: Injector): () => Promise<any> {
  // return () => {
  //   translate.setDefaultLang('en');
  //   return translate.use('en');
  // };
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'en';

      translate.setDefaultLang('en');
      translate.use(langToSet).subscribe((res) => {
        console.log(`Successfully initialized '${langToSet}' language.'`);
      }, err => {
        console.error(`Problem with '${langToSet}' language initialization.'`);
      }, () => {
        resolve(null);
      });
    });
  });
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export abstract class NavButtonReference implements INavButton {
  isOpen: boolean;
  isSelected: boolean;
  link: string;
  finishInitComponent: Observable<boolean>;
  abstract onFinishInitComponent(): void;
};

