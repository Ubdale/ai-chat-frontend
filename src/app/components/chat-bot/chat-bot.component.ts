import { CommonModule } from '@angular/common';
import { ChatBotService } from './../../services/chat-bot.service';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  user: string;
  message: string;
  timestamp: Date;
  isLoading?: boolean;
}

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
  standalone: true
})
export class ChatBotComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;
  
  constructor(private ChatBotService: ChatBotService) { }
  
  message: string = '';
  messages: Message[] = [];
  isLoading: boolean = false;
  isTyping: boolean = false;

  ngOnInit() {
    // Add welcome message
    this.messages.push({
      user: 'Bot',
      message: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date()
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  autoResizeTextarea(): void {
    const textarea = this.messageInput?.nativeElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  sendMessage() {
    if (!this.message.trim() || this.isLoading) return;

    const userMessage = this.message.trim();
    this.message = '';
    this.isLoading = true;
    this.autoResizeTextarea();

    // Add user message
    this.messages.push({
      user: 'User',
      message: userMessage,
      timestamp: new Date()
    });

    // Add typing indicator
    this.isTyping = true;
    this.messages.push({
      user: 'Bot',
      message: '',
      timestamp: new Date(),
      isLoading: true
    });

    // Simulate typing delay for better UX
    setTimeout(() => {
      this.ChatBotService.sendMessage(userMessage).subscribe({
        next: (data: any) => {
          // Remove typing indicator
          this.messages = this.messages.filter(msg => !msg.isLoading);
          
          // Add bot response
          this.messages.push({
            user: 'Bot',
            message: data.message || 'I apologize, but I couldn\'t process your request at the moment.',
            timestamp: new Date()
          });
          
          this.isLoading = false;
          this.isTyping = false;
        },
        error: (error) => {
          // Remove typing indicator
          this.messages = this.messages.filter(msg => !msg.isLoading);
          
          // Add error message
          this.messages.push({
            user: 'Bot',
            message: 'Sorry, I encountered an error. Please try again.',
            timestamp: new Date()
          });
          
          this.isLoading = false;
          this.isTyping = false;
          console.error('Error:', error);
        }
      });
    }, 1000);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  onInput(): void {
    this.autoResizeTextarea();
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }
}
