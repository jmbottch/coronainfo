import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.styl']
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // lijst van regels
  
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

}
