import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator,   
  AbstractControl,
  ValidationErrors} from "@angular/forms";
import { Directive, forwardRef } from "@angular/core";

@Directive({
  selector: '[mustBeFuture][ngModel],[mustBeFuture][ngControl],[mustBeFuture][ngFormControl]',
  providers: [
      {
        provide: NG_VALIDATORS,
        useExisting: DateValidators,
        multi: true
      }
    ]
})
export class DateValidators implements Validator {
  constructor() {
    console.log('yay!');
  }

  validate(control: AbstractControl) {
    console.log('asdf');
    return this.mustBeFuture(control);
  }

  mustBeFuture(control: AbstractControl): ValidationErrors {
    let dueDate = new Date(control.value);
    let now = new Date(Date.now());
    console.log('asdf');

    return (dueDate < now)
      ? { mustBeFuture: { message: 'must be a future date' } }
      : null;
  }

  static mustBeFuture(control: AbstractControl): ValidationErrors {
    let dueDate = new Date(control.value);
    let now = new Date(Date.now());
    console.log('asdf');

    return (dueDate < now)
      ? { mustBeFuture: { message: 'must be a future date' } }
      : null;
  }
}
