import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Message {
  text: string;
  sent: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Message[] = [
    { text: 'Olá!', sent: true, timestamp: new Date() },
    { text: 'Oi, tudo bem?', sent: false, timestamp: new Date() }
  ];
  newMessage: string = '';

  constructor(private router: Router) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sent: true, timestamp: new Date() });
      this.newMessage = '';
    }
  }

  goToGroupChat() {
    this.router.navigate(['/group-chat']);
  }

  createGroup() {
    // Lógica para criar grupo aqui
    this.router.navigate(['/group-chat']);
  }

  logout() {
    // Lógica para logout aqui
    this.router.navigate(['/login']);
  }
}
