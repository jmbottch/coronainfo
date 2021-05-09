import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.styl']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // lijst van risicogroepen.  
  groups: string[] = [
    "Mensen met chronische luchtweg- of longproblemen die  onder behandeling van een longarts zijn.",
    "Chronische hartpatiënten die daardoor in aanmerking komen voor een griepprik",
    "Mensen met diabetes die slecht ingesteld zijn en/of met complicaties. ",
    "Mensen met een nierziekte die moeten dialyseren of wachten op een niertransplantatie",
    "Mensen met een verminderde weerstand tegen infecties doordat zij medicijnen gebruiken voor een auto-immuunziekte en mensen die een orgaan of stamceltransplantatie hebben ondergaan.",
    "Mensen met een hiv humaan immunodeficientievirus -infectie die (nog) niet onder behandeling zijn van een arts of met een hivinfectie met een CD4 cluster of differentiation 4   cluster of differentiation 4 getal onder <200/mm2. ",
    "Mensen met ernstige leverziekte. ",
    "Mensen met zeer ernstig overgewicht."
  ]

}
