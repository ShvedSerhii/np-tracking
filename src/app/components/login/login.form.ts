import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { User } from '../../models/user.model';

export default class LoginForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: User;

  constructor(model: User) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl(this.model.email, {
        validators: [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)],
        updateOn: 'change'
      }),
      password: new FormControl(this.model.password, {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/[0-9a-zA-Z]$/)
        ],
        updateOn: 'change'
      })
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.email = data.email;
      this.model.password = data.password;
    });
  }
}
