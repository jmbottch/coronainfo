import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.styl']
})
export class VaccinesComponent implements OnInit {

  //variabelen die gebruikt worden op de pagina vaccins
  selectedForm!: FormGroup; //het 'formulier' om een vaccin te kiezen
  selected!: any            //het gekozen vaccin

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //initialisatie van het 'formulier'
    this.selectedForm = this.fb.group({
      selected: []
    })
  }

  //functie om het vaccin te selecteren
  onSelect() {
    this.selected = this.selectedForm.value.selected
  }

  

}
