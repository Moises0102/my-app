import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeState = true;
  beginningState = false;
  historyState = false;
  developState = false;
  enemiesState = false;
  downloadState = false;

  title = 'The Game';
}
