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
    SOId : 0,
    SODateTime : new Date(),
    SOTitle : 'Shout Out Title',
    SOComment : 'Shout Out Comment',
    SOEdited : false,
    SOEditDateTime : new Date(),
    UserID : '',
    UserName : '',
    UserEmail : ''
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
    let response = confirm(`Are you sure you want to add Shout Out: ${this.shoutout.SOTitle}?`).valueOf();

    if (response)
    {
      this.SOService.createShoutOut(this.shoutout)
       .subscribe(() => this.SOService.getShoutOuts());

      this.shoutout = {
        SOId : 0,
        SODateTime : new Date(),
        SOTitle : 'Shout Out Title',
        SOComment : 'Shout Out Comment',
        SOEdited : false,
        SOEditDateTime : new Date(),
        UserID : this.profile.sub,
        UserName : this.profile.name,
        UserEmail : this.profile.email,
        };
    };
  }
}