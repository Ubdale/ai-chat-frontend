# AI Chat Frontend

A modern, professional AI chat application built with Angular that provides a beautiful and intuitive interface for conversing with AI assistants.

## Features

### 🎨 Modern UI/UX
- **Professional Design**: Clean, modern interface inspired by ChatGPT and other leading AI chat applications
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Dark Mode Support**: Automatic dark mode detection and styling

### 💬 Chat Features
- **Real-time Messaging**: Instant message display with typing indicators
- **Message Timestamps**: Each message shows the exact time it was sent
- **Auto-scroll**: Automatically scrolls to the latest message
- **Loading States**: Visual feedback during AI processing
- **Error Handling**: Graceful error messages and recovery

### ⌨️ Input Experience
- **Auto-resizing Textarea**: Dynamically adjusts height as you type
- **Keyboard Shortcuts**: 
  - `Enter` to send message
  - `Shift + Enter` for new line
- **Send Button**: Visual send button with loading animation
- **Input Validation**: Prevents empty messages and duplicate sends

### 🎯 User Experience
- **Welcome Message**: Friendly greeting from the AI assistant
- **Typing Indicators**: Animated dots showing when AI is responding
- **Message Bubbles**: Distinct styling for user and AI messages
- **Avatar Icons**: Visual distinction between user and AI
- **Accessibility**: Proper focus management and keyboard navigation

## Technology Stack

- **Frontend**: Angular 19
- **Styling**: SCSS with modern CSS features
- **Icons**: SVG icons for crisp, scalable graphics
- **Responsive**: Mobile-first design approach
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-chat-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --configuration production
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── chat-bot/
│   │       ├── chat-bot.component.html    # Main chat interface
│   │       ├── chat-bot.component.scss    # Modern styling
│   │       └── chat-bot.component.ts      # Chat logic
│   ├── services/
│   │   └── chat-bot.service.ts            # API communication
│   └── app.component.html                 # Main app container
├── styles.scss                            # Global styles
└── main.ts                               # Application entry point
```

## Customization

### Colors and Themes
The application uses CSS custom properties for easy theming. Key color variables are defined in the component SCSS file.

### Styling
All styles are modular and well-organized in the component SCSS file. The design follows modern CSS best practices with:
- Flexbox and Grid layouts
- CSS custom properties
- Responsive breakpoints
- Smooth transitions and animations

### Adding Features
The component architecture makes it easy to add new features:
- Message reactions
- File attachments
- Voice messages
- Message search
- Conversation history

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
