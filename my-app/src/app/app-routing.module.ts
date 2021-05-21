import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginningComponent } from './beginning/beginning.component';
import { HistoryComponent } from './components/history/history.component';
import { DevelopComponent } from './components/develop/develop.component';
import { DownloadComponent } from './components/download/download.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'first', component: BeginningComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'develop', component: DevelopComponent },
  { path: 'enemies', component: EnemiesComponent },
  { path: 'download', component: DownloadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ BeginningComponent, HistoryComponent , DevelopComponent , DownloadComponent , EnemiesComponent , HomeComponent];

 }
