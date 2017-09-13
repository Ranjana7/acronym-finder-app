import { Component }                   from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'acronym-add',
  templateUrl: './acronym-add.component.html'
})
export class AcronymAddComponent {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();

   }
  createForm() {
    this.addForm = this.fb.group({
    
      getAcronymForm: this.fb.array([]), // <-- as an empty FormArray
      
    });
  }
  get getAcronymForm(): FormArray{ 
  return this.addForm.get('getAcronymForm') as FormArray;
  };

}