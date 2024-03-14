import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  fullname: string = '';
  email: string = '';
  phonePrefix: string = '';
  phoneNumber: string = '';
  creditCard: string = '';

  onSubmit(form: any): void {
    if (form.valid && this.validateEmail(this.email)) {
      alert('Form submitted successfully');
    }
  }

  validateEmail(email: string): boolean {
    if (!email.includes('@')) {
      alert('Email must contain @');
      return false;
    }
    return true;
  }
}
