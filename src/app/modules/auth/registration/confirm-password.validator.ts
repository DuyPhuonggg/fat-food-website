import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  static MatchPassword(control: AbstractControl) {
    const password = control.get('password')!.value;

    const confirmPassword = control.get('cPassword')!.value;

    if (password !== confirmPassword) {
      control.get('cPassword')!.setErrors({ ConfirmPassword: true });
    } else {
      return;
    }
  }

  static ComparePassword(control: AbstractControl) {
    const password = control.get('currentPassword')!.value;
    const newPassword = control.get('newPassword')!.value;

    if (password === newPassword) {
      control.get('newPassword')!.setErrors({ ComparePassword: true });
    } else {
      return;
    }
  }
}
