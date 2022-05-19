import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoutout',
  templateUrl: './shoutout.component.html',
  styleUrls: ['./shoutout.component.css']
})

export class ShoutoutComponent implements OnInit {
  
  create: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }
  
  invertValue() { this.create = !this.create; }
}
