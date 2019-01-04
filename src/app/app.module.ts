import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { LoremComponent } from './lorem/lorem.component'
import { SellerComponent } from './seller/seller.component'

const routes: Routes = [
    {
        path: 'seller',
        component: SellerComponent
    },
    {
        path: '',
        component: LoremComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
]

@NgModule({
    declarations: [
        AppComponent,
        LoremComponent,
        SellerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
