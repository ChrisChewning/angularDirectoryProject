import { Component } from '@angular/core';
// import { HomeComponent } from './home/home.component'; //this comes from the export from the home.component.ts file.
import { HomeComponent } from './home/index'; //optional way
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent, Router ]
})

export class AppComponent {
  title = 'Chris\'s Directory';
  name = 'Chris';
  person = {
    name: "Chris",
    company: "none"
  };


//add is the fn name. It is in your root component, which is outputting
add(e){
  alert('clicked');
    console.log(e);
}

}
