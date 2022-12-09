import { Component, OnInit, Input } from '@angular/core';
import { ShoutOut } from '../Models/shoutout';
import { ShoutoutService } from '../Services/shoutout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-shoutout-detail',
  templateUrl: './shoutout-detail.component.html',
  styleUrls: ['./shoutout-detail.component.css']
})
export class ShoutoutDetailComponent implements OnInit {

  constructor(private SOService: ShoutoutService, private currRoute: ActivatedRoute, private router: Router, public auth: AuthService) { }

  @Input() shoutout?: ShoutOut;
  shoutouts?: ShoutOut[];

  ngOnInit(): void {
  }

  deleteSO(event: Event): void
  {
    event.stopPropagation();
    if (this.shoutout)
    {
      let response = confirm(`Are you sure you want to delete Shout Out: ${this.shoutout.SOTitle}?`).valueOf();
      if (response)
      {
        console.log(this.shoutout.SOId);
        this.SOService.deleteShoutOut(this.shoutout.SOId)
          .subscribe(() => {this.shoutouts});
      }
    }
  }
}
