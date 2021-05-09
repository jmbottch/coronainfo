import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.styl']
})
export class VaccinesComponent implements OnInit {

  selectedForm!: FormGroup;
  selected!: any

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectedForm = this.fb.group({
      selected: []
    })
  }

  onSelect() {
    this.selected = this.selectedForm.value.selected
    console.log(this.selected)
  }

  

}
