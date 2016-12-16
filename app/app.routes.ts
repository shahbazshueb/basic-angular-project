/**
 * Created by shahbaz.ali on 11/21/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/Pages/home.component";
import {AboutComponent} from "./components/Pages/about.component";
import { NgModule }      from '@angular/core';
export const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    }

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export  class AppRoutingModule {}
