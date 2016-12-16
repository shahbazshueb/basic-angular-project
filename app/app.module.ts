/// <reference path="../node_modules/@types/node/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {JumbotronComponent} from "./components/jumbotron/jumbotron.component";
import {HomeComponent} from "./components/Pages/home.component";
import {AboutComponent} from "./components/Pages/about.component";
import {appRouting, AppRoutingModule} from "./app.routes";
@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent,
        NavbarComponent,
        JumbotronComponent,
        HomeComponent,
        AboutComponent

    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
