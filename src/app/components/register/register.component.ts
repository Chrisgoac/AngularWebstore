import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User;
  
  constructor(){
    this.user = new User('','', '', '', 0o0, '', '', [], false);
  }

  updateHobbies(hobby: string) {
    const index = this.user.hobbies.indexOf(hobby);
    if (index === -1) {
      this.user.hobbies.push(hobby);
    } else {
      this.user.hobbies.splice(index, 1);
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido');
    } else {
      console.log('Formulario inválido');
    }
  }

}
