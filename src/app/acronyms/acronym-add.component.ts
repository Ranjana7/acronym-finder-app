import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IAcronym } from './acronym';

import { AcronymService } from './acronym.service';


@Component({
  selector: 'acronym-add',
  templateUrl: './acronym-add.component.html'
})
export class AcronymAddComponent implements OnInit, OnChanges {
  @Input() acronym: IAcronym;
  
  iAcronym: FormGroup;
  acronyms: IAcronym[] = [];
        

  constructor(
  private fb: FormBuilder, 
  private _acronymService: AcronymService) {}

  ngOnInit() {
    this.iAcronym = this.fb.group({
      acronymName: ['', Validators.required],
      description: ['', Validators.required],
      fullForm: ['', Validators.required],
      wikiLink: ['', Validators.required]
    });
    
  }

  private applyFormValues (group, formValues){
  Object.keys(formValues).forEach(key=>{
  let formControl = <FormControl>group.controls[key];
  if (formControl instanceof FormGroup){
  this.applyFormValues(formControl, formValues[key]);} else {formControl.setValue(formValues[key]);
  }
  });
  }

  ngOnChanges(){
    this.iAcronym.reset({
    acronymName: "",
    description: "",
    fullForm: "",
    wikiLink: "",
    });
    console.log('reset');

  }
   onSubmit(){
    let formValues = sessionStorage.getItem('form');
    if(formValues){
    this.applyFormValues(this.iAcronym, JSON.parse(formValues));}

    this.iAcronym.valueChanges.subscribe(form => {sessionStorage.setItem ('form', JSON.stringify(form));
    });
       console.log('save');  
       console.log(formValues);       
}
 
  reset(){this.ngOnChanges();}
}
