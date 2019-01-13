import {
  NG_VALIDATORS,
  Validator,   
  AbstractControl,
  ValidationErrors} from "@angular/forms";
import { Directive } from "@angular/core";

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
  validate(control: AbstractControl) {
    return this.mustBeFuture(control);
  }

  mustBeFuture = DateValidators.mustBeFuture;

  static mustBeFuture(control: AbstractControl): ValidationErrors {
    let dueDate = new Date(control.value);
    let now = new Date(Date.now());

    return (dueDate <= now)
      ? { mustBeFuture: { message: 'must be a future date' } }
      : null;
  }
}
