import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [LoggingService] don't need it typed here b.c it's in main.ts
})
export class HomeComponent implements OnInit {

    // homeTitle="Welcome to the home page..."; //variable defined on the HomeComponent class.
    // @Input() person; //you input person from app. root down the tree.
    // @Output() onClick = new EventEmitter(); //output the event click UP the tree to the root. Think: Root is at the top and everything is nested to root downwards.
    //
    // fireAddEvent(e){
    //   this.onClick.emit(e); //the fn runs. .onClick emits the event. this points to the @output(). It will emit this onClick event.
    // }

    constructor(private logger: LoggingService) { }

    logIt(){
      this.logger.log();
    }



  constructor() { }

  ngOnInit() {
  }

}
