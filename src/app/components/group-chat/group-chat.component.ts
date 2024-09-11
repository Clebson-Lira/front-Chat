import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-group-chat',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, InputTextModule, CardModule],
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent {
  groupMessage: string = '';
  groupMessages: string[] = [];

  constructor(private router: Router) {}

  sendGroupMessage() {
    if (this.groupMessage.trim()) {
      this.groupMessages.push(this.groupMessage);
      this.groupMessage = '';
    }
  }

  goToChat() {
    this.router.navigate(['/chat']);
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
