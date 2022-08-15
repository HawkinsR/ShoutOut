import { Component, OnInit } from '@angular/core';
import { ShoutOut } from '../Models/shoutout';
import { ShoutoutService } from '../Services/shoutout.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-create-shoutout',
  templateUrl: './create-shoutout.component.html',
  styleUrls: ['./create-shoutout.component.css']
})

export class CreateShoutoutComponent implements OnInit {
  profileJson: any;
  profile: any;

  shoutout: ShoutOut = {
    soId : 0,
    soDateTime : new Date(),
    soTitle : 'Shout Out Title',
    soComment : 'Shout Out Comment',
    soEdited : false,
    soEditDateTime : new Date(),
    userID : '',
  };

  constructor(public auth: AuthService, private SOService: ShoutoutService) { }
  
  ngOnInit(): void { 
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = profile),
    );
    this.profile = JSON.parse(this.profileJson);
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
        userID : this.profile.sub,
        };
    };
  }
}