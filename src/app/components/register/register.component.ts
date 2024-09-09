import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  password: string = '';
  profilePicture: File | null = null;

  constructor(private http: HttpClient,  private router: Router) {}

  register() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('password', this.password);
    if (this.profilePicture) {
      formData.append('profilePicture', this.profilePicture);
    }

    this.http.post('http://localhost:3000/register', formData).subscribe(
      (response) => console.log('Usuário registrado com sucesso', response),
      (error) => console.error('Erro ao registrar o usuário', error)
    );
  }

  onFileChange(event: any) {
    this.profilePicture = event.target.files[0];
  }
}
