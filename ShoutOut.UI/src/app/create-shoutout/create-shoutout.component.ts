import { Component, OnInit } from '@angular/core';
import { ShoutOut } from '../Models/shoutout';
import { ShoutoutService } from '../Services/shoutout.service';

@Component({
  selector: 'app-create-shoutout',
  templateUrl: './create-shoutout.component.html',
  styleUrls: ['./create-shoutout.component.css']
})
export class CreateShoutoutComponent implements OnInit {
 
  shoutout: ShoutOut = {
    soId : 0,
    soDateTime : new Date(),
    soTitle : 'Shout Out Title',
    soComment : 'Shout Out Comment',
    soEdited : false,
    soEditDateTime : new Date(),
    userID : 0,
  };

  constructor(private SOService: ShoutoutService) { }
  
  ngOnInit(): void {
  }

  addShoutOut()
  {
    let response = confirm(`Are you sure you want to add Shout Out: ${this.shoutout.soTitle}?`).valueOf();

    if (response)
    {
      this.SOService.createShoutOut(this.shoutout)
       .subscribe(() => this.SOService.getShoutOuts());
      this.shoutout = {
        soId : 0,
        soDateTime : new Date(),
        soTitle : 'Shout Out Title',
        soComment : 'Shout Out Comment',
        soEdited : false,
        soEditDateTime : new Date(),
        userID : 0,
      };
      // this.create = false;
    }
  }
}
