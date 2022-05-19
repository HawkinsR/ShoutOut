import { Component, OnInit } from '@angular/core';
import { ShoutOut } from '../Models/shoutout';
import { ShoutoutService } from '../Services/shoutout.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoutout-list',
  templateUrl: './shoutout-list.component.html',
  styleUrls: ['./shoutout-list.component.css']
})
export class ShoutoutListComponent implements OnInit {

  shoutouts?: ShoutOut[] = [];

  selectedSO?: ShoutOut;

  constructor(private SOService: ShoutoutService, private currRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getShoutOuts();
  }

  onSelect(so: ShoutOut): void {
    this.selectedSO = so;
  }

  getShoutOuts(): void 
  {
    this.SOService.getShoutOuts()
      .subscribe(shoutouts => this.shoutouts = shoutouts);
  }

  goToShoutOut(soID: number) 
  {
    this.router.navigateByUrl('/api/${soId}');
  }

  createShoutOut(): void
  {
    this.router.navigate(['create', 'new'], { relativeTo: this.currRoute });
  }

  editShoutOut(event: Event, shoutout: ShoutOut): void
  {
    event.stopPropagation();
    this.router.navigate(['shoutouts', 'edit', shoutout.soId]);
  }
}
