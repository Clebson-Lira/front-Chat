import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3001'); // Substitua pelo endereço do seu backend

  constructor() {}

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  receiveMessages() {
    return new Observable<string>((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}
