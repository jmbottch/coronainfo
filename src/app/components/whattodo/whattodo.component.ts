import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-whattodo',
  templateUrl: './whattodo.component.html',
  styleUrls: ['./whattodo.component.styl']
})
export class WhattodoComponent implements OnInit {

  bmiGroup: FormGroup;
  foundBMI = 0;
  submitted = false;
  state = ""
  
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.bmiGroup = this.fb.group({
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      length: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    });
  }

  onSubmit() {
    //deel length door 100, om het meters te maken
    var temp = this.bmiGroup.value.length / 100
    //uitkomst in het kwadraat
    var denum = temp * temp;
    //deel gewicht door lengte in het kwadraat
    var bmi = this.bmiGroup.value.weight / denum;
    //zet variabele boolean submitted op true (geen deel van de berekening, maar een herkenning voor de pagina)
    this.submitted = true;
    //rond het getal af
    var rounded = Math.round(bmi * 10) / 10

    //bepaal in welke categorie de gebruiker zit
    if(rounded < 18.5 ) {
      this.state = "ondergewicht"
    }
    if(rounded >= 18.5 && rounded < 25 ) {
      this.state = "gezond gewicht"
    }
    if(rounded >= 25 && rounded < 30 ) {
      this.state = "overgewicht"
    }
    if(rounded >= 30 ) {
      this.state = "Ernstig overgewicht (obesitas)"
    }

    //zet het gevonden bmi in de variabele die gebruikt kan worden door de pagina
    this.foundBMI = rounded;
  }

  //hieronder volgt form validation, er wordt gecheckt of er iets is ingevuld, zo niet komt er een foutmelding.
  get form() {
    return this.bmiGroup.controls;
  }

  get gender() {
    return this.bmiGroup.get('gender')
  }
  validateGender() {
    return this.gender?.hasError('required') ? 'Maak een keuze' : ''
  }
  get age() {
    return this.bmiGroup.get('age')
  }
  validateAge() {
    return this.age?.hasError('required') ? 'Vul uw leeftijd in' : ''
  }
  get length() {
    return this.bmiGroup.get('length')
  }
  validateLength() {
    return this.length?.hasError('required') ? 'Vul uw lengte in' : ''
  }
  get weight() {
    return this.bmiGroup.get('weight')
  }
  validateWeight() {
    return this.weight?.hasError('required') ? 'Vul uw gewicht in' : ''
  }
  
}
