import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  constructor() { }

  //activeItem en setActiveItem worden gebruikt om aan te geven op welke pagina van de website de gebruiker zich bevindt,
  //hiermee kan de applicatie de kleur van de knoppen aanpassen.
  activeItem : string;

  ngOnInit(): void {
  }

  setActiveItem(page: string) {
    this.activeItem = page;
  }

}
