import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    homeTitle="Welcome to the home page..."; //variable defined on the HomeComponent class.
    // // homeString= 'Name';
    // // homeBoolean='true';
    //
    // alertMe(val){
    //   alert(val);
    // }

  person = {
    name: "Chris",
    company: "none"
  };


  constructor() { }

  ngOnInit() {
  }

}
