import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  constructor() { }

  activeItem : string;

  ngOnInit(): void {
  }

  setActiveItem(page: string) {
    this.activeItem = page;
  }

}
