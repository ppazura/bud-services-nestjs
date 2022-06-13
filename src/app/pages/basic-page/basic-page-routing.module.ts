import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {BasicPageComponent} from './basic-page.component';

const routes: Routes = [
    { path: '', component: BasicPageComponent, children: [
            {path: '',   loadChildren: () => import('../welcome-page/welcome-page.module').then(m => m.WelcomePageModule)},
        ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: 'externalUrlRedirectResolver',
            useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                window.location.href = (route.data as any).externalUrl;
            }
        }
    ]
})
export class BasicPageRoutingModule { }
