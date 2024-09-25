import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessageModule,
    CardModule
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidPassword: boolean = false;
  usuarioInvalid: boolean = false;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { name, password } = this.loginForm.value;
    this.authService.login(name, password).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
        this.invalidPassword = false; // Resetar o estado da senha inválida
        this.usuarioInvalid = false; // Resetar o estado do usuário inválido
        this.router.navigate(['/chat']);
      },
      error => {
        console.error('Erro no login', error);
        if (error.status === 401) { // Supondo que o status 401 indica senha inválida
          this.invalidPassword = true;
        } else if (error.status === 404) { // Supondo que o status 404 indica usuário não encontrado
          this.usuarioInvalid = true;
        }
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
