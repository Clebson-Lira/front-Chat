import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    const loginData = { name, password };
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro no lado do servidor
      console.error(
        `Código do erro ${error.status}, ` +
        `corpo do erro: ${error.error}`);
    }
    return throwError(
      'Algo deu errado; por favor, tente novamente mais tarde.');
  }
}
