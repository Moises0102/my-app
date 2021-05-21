import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { DevelopComponent } from './components/develop/develop.component';
import { BeginningComponent } from './beginning/beginning.component';
import { DownloadComponent } from './components/download/download.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DevelopComponent,
    BeginningComponent,
    DownloadComponent,
    EnemiesComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'home', component: HomeComponent},
      {path: 'first', component: BeginningComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'develop', component: DevelopComponent},
      {path: 'enemies', component: EnemiesComponent},
      {path: 'download', component: DownloadComponent}
    ])
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
