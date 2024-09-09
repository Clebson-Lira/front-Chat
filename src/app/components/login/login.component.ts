import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Lógica de autenticação aqui
    if (this.name === 'admin' && this.password === 'password') {
      // Autenticação bem-sucedida
      console.log('Autenticação bem-sucedida');
    } else {
      // Autenticação falhou
      console.log('Autenticação falhou');
    }
    this.router.navigate(['/chat']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
