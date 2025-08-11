import { Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';

export const routes: Routes = [
{path: '', component: ChatBotComponent},
    {path: 'chat-bot', component: ChatBotComponent}
];
