import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
