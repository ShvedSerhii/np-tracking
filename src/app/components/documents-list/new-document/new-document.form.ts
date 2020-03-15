import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';
import { DocumentModel } from 'src/app/models/document.model';

  /*
      ReactiveForm structure class
    */
  export default class NewDocumentForm {
    private formBuilder: FormBuilder;
    public formGroup: FormGroup;
    public model: DocumentModel;
  
    constructor(model: DocumentModel) {
      this.formBuilder = new FormBuilder();
      this.model = model;
      this.createForm();
    }
  
    // Create form fields with validation rules
    public createForm() {
      this.formGroup = this.formBuilder.group({
        number: new FormControl(this.model.DocumentNumber, {
          validators: [Validators.required],
          updateOn: 'change'
        }),
        phone: new FormControl(this.model.Phone, {
          updateOn: 'change'
        })
      });
  
      // form update
      this.formGroup.valueChanges.subscribe((data: any) => {
        this.model.DocumentNumber = data.number;
        this.model.Phone = data.phone;
      });
    }
  }