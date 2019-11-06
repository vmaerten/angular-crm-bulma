import {AbstractControl, ValidationErrors} from "@angular/forms";

export function checkPassword(c: AbstractControl): ValidationErrors | null {
  if (c.value.length !== 0 && c.value.length < 5) {
    return {
      checkPassword: 'Erreur controle password'
    };
  }
  return null;
}
