// province-validator.service.ts

import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProvinceValidatorService {

  constructor() { }

  validateProvince(control: FormControl): { [key: string]: any } | null {
    const allowedProvinces = ['Barcelona', 'Tarragona', 'Girona'];
    if (allowedProvinces.indexOf(control.value) === -1) {
      return { 'invalidProvince': true };
    }
    return null;
  }
}
