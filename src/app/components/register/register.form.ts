import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { User } from '../../models/user.model';
import { MustMatch } from './must-match.validator';

export default class RegisterForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: User;

  constructor(model: User) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm(): void {
    this.formGroup = this.formBuilder.group(
      {
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
        }),
        confirmPassword: ['']
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );

    this.formGroup.valueChanges.subscribe((data: User) => {
      this.model.email = data.email;
      this.model.password = data.password;
    });
  }
}
