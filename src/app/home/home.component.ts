import { Component, OnInit } from '@angular/core';
import { GeneralComponent } from '../components/general/general.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor() { }
  rules: string[] = [
    "Blijf zo veel mogelijk thuis",
    "Werk zo veel mogelijk thuis",
    "Ontmoet zo min mogelijk mensen",
    "Volg hygiene richtlijnen",
    "Houdt minstens 1,5 meter afstand",
    "Vermijd drukte",
    "Mondkapjes plicht",
    "Blijf thuis en laat je testen bij klachten"
  ]


  ngOnInit(): void {
  }
  

}

