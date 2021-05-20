import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
//import { ThreeComponent } from './components/one/one.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: InicioComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  //{ path: 'three', component: ThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ InicioComponent, OneComponent , TwoComponent ];

 }
