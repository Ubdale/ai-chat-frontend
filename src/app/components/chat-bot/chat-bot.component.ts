import { CommonModule } from '@angular/common';
import { ChatBotService } from './../../services/chat-bot.service';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
interface Message {
  user: string;
  message: string;
}
@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
  standalone: true
})
export class ChatBotComponent {
constructor(private ChatBotService: ChatBotService) { }
message: string = '';
messages: Message[] = [];

sendMessage(){
  this.ChatBotService.sendMessage(this.message).subscribe((data: any) => {
    this.messages.push({ user: 'User', message: this.message });
    console.log(data);
    this.messages.push({user: 'Bot', message: data.message});
    this.message = '';
  }
  )}
}
