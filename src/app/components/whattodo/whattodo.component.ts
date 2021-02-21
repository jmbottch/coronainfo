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
    //divide length with 100, to make it meters
    var temp = this.bmiGroup.value.length / 100
    //square the outcome
    var denum = temp * temp;
    //divide weigth with squared length in m
    var bmi = this.bmiGroup.value.weight / denum;
    //set submitted true
    this.submitted = true;
    //round number
    var rounded = Math.round(bmi * 10) / 10

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

    //set foundbmi
    this.foundBMI = rounded;
  }
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
