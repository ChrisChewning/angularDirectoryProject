import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component.ts'; //this comes from the export from the home.component.ts file.
import { HomeComponent } from './home/index'; //optional way

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent]
})
export class AppComponent {
  title = 'angular-directory';
}
