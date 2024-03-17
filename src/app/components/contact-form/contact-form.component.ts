import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinceValidatorService } from '../../services/province-validator.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private provinceValidator: ProvinceValidatorService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      queryType: ['', Validators.required],
      province: ['', [Validators.required, this.provinceValidator.validateProvince]],
      acceptPolicy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulari enviat:', this.contactForm.value);
      // Aquí pots afegir la lògica per enviar el formulari
    } else {
      console.error('Formulari invàlid. Comprova els errors.');
    }
  }
}
