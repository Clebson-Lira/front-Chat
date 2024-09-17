import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // HttpClientModule está importado aqui
  providers: [AuthService], // Certifique-se de adicionar o AuthService como provider, se necessário
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.name, this.password).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
        this.router.navigate(['/chat']);
      },
      error => {
        console.error('Erro no login', error);
        // Trate o erro de login
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
