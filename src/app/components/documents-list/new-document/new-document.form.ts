import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DocumentModel } from 'src/app/models/document.model';

export default class NewDocumentForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: DocumentModel;

  constructor(model: DocumentModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group({
      number: new FormControl(this.model.DocumentNumber, {
        validators: [
          Validators.required,
          Validators.pattern(/^(1|2|5)[0-9]{13}$/)
        ],
        updateOn: 'change'
      }),
      phone: new FormControl(this.model.Phone, {
        validators: [Validators.pattern(/^(380)[0-9]{9}$/)],
        updateOn: 'change'
      })
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.DocumentNumber = data.number;
      this.model.Phone = data.phone;
    });
  }
}
