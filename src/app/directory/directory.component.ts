import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';


@Component({
  moduleId: module.id;
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes: [FilterPipe],
  providers: [DataService]
  // providers: [LoggingService]  //providers property. in your code you are going to require a service. here is where it makes an instance of that service. don't need it typed here b.c it's in main.ts
})

export class DirectoryComponent implements OnInit {
  peoples = [];
  boolean = null;
    // {name: 'Louis Salin', company: 'SparkCoginition', color: 'red'},
    // {name: 'Praneeth Mudiganti', company: 'SparkCognition', color: 'red'},
    // {name: 'Monica Singh', company: 'Civitas Learning', color: 'cyan'}



  // classes = {'blue': true, 'red': false, 'underline': true};
  // test = false;
  // person: string; //declared
  //
  // constructor(private route: ActivatedRoute) { //injects the private route: ActivatedRoute into the constructor function. private route
  // this.person = route.snapshot.params['person'];
constructor(private logger: LoggingService, private dataService: DataService) { }

logIt(){
  this.logger.log();
}


  //1. save the person property as this.person. this.person points to person: string. defined the type in OnInIt function.

  //2. route.snapshot.params  is saying look at the route in app.routes.ts. (your routes file) take a snapshot of that route. grab the paramters of that route. we want the paramater 'person'


  ngOnInit() {
    this.dataService.fetchData(); //will look into the service and make sure the page is loaded first.
  }

}
