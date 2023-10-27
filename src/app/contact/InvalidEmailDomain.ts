import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function createInvalidDomainValidator(hostNotAllowed: string[]) : ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value?.toLowerCase();
    const hostsNotAllowed = ['gmail.com', 'o2.pl'];

    if(!value) {
      return null;
    }

    const matches = hostsNotAllowed.some(x => value.indexOf(x) > -1);
    return matches ? { invalidEmailDomain : true } : null;
  }
}

