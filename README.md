# 🚀 VibeCoder - AI Website Builder Platform

**VibeCoder** is a full-featured AI-powered website builder that lets you create stunning websites using natural language. Built with React, TypeScript, and powered by GPT-4.

![VibeCoder Platform](https://img.shields.io/badge/AI-Powered-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![React](https://img.shields.io/badge/React-18-61dafb) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🤖 AI-Powered Development
- **Natural Language Interface**: Describe what you want, and AI generates the code
- **GPT-4 Integration**: Leverages OpenAI's most powerful model
- **Context-Aware**: AI understands your existing code and builds on it
- **Smart Code Generation**: Creates clean, modern, and responsive code

### 💻 Professional Code Editor
- **Monaco Editor**: The same editor that powers VS Code
- **Multi-Language Support**: HTML, CSS, and JavaScript editing
- **Syntax Highlighting**: Beautiful code presentation
- **Auto-Completion**: Smart suggestions as you type

### 👁️ Live Preview
- **Real-Time Updates**: See changes instantly
- **Responsive Views**: Test mobile, tablet, and desktop layouts
- **Sandboxed Environment**: Safe code execution
- **Viewport Controls**: Switch between different screen sizes

### 🎨 Template Library
- **Pre-Built Templates**: Landing pages, portfolios, and more
- **Quick Start**: Begin with professional designs
- **Customizable**: Fully editable starting points
- **Modern Designs**: Beautiful, responsive templates

### 📦 Export & Deploy
- **ZIP Download**: Get all files in a compressed archive
- **HTML Export**: Single-file HTML with embedded CSS/JS
- **Production Ready**: Clean, optimized code
- **Easy Deployment**: Upload to any hosting service

### 💾 Project Management
- **Save Projects**: Keep your work safe
- **Load Projects**: Continue where you left off
- **Auto-Save**: Never lose your progress
- **LocalStorage**: Client-side project storage

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - VS Code's editor
- **Zustand** - Lightweight state management

### AI Integration
- **OpenAI GPT-4** - Advanced language model
- **Custom Prompts** - Optimized for code generation
- **Context Awareness** - Understands existing code

### Build Tools
- **Vite** - Next-generation frontend tooling
- **PostCSS** - CSS transformations
- **TypeScript Compiler** - Type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lovable11
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Configuration

1. Click the **Settings** icon in the top-right corner
2. Enter your OpenAI API key
3. Click **Save Settings**
4. Start building with AI!

## 📖 How to Use

### Creating a Website with AI

1. **Start with a Template** (Optional)
   - Click "Templates" in the header
   - Choose a starting point or go blank

2. **Chat with AI**
   - Type what you want in the chat panel
   - Example: "Create a landing page with a hero section and features grid"
   - AI generates the code for you

3. **Edit the Code**
   - Switch between HTML, CSS, and JavaScript tabs
   - Make manual adjustments if needed
   - Changes appear in preview instantly

4. **Preview Your Website**
   - Use viewport controls to test responsive design
   - See live updates as you code
   - Click refresh if needed

5. **Export Your Website**
   - Click "Export" in the header
   - Choose HTML (single file) or ZIP (multiple files)
   - Deploy to any hosting service

### Example Prompts

- "Create a modern portfolio website with a dark theme"
- "Add a contact form with name, email, and message fields"
- "Make the hero section more colorful with a gradient background"
- "Add smooth scroll animations to the navigation"
- "Create a responsive grid of product cards"

## 🎯 Project Structure

```
vibecoder/
├── src/
│   ├── components/          # React components
│   │   ├── Chat/           # AI chat interface
│   │   ├── Editor/         # Code editor
│   │   ├── Layout/         # Header and layout
│   │   ├── Preview/        # Live preview
│   │   └── Templates/      # Template components
│   ├── store/              # Zustand state management
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   │   ├── export.ts       # Export functionality
│   │   └── templates.ts    # Template definitions
│   ├── api/                # API integrations
│   │   └── openai.ts       # GPT integration
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
└── vite.config.ts         # Vite config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### AI Code Generation

The platform uses GPT-4 to generate code based on natural language descriptions. The AI:
- Understands context from existing code
- Generates semantic HTML5
- Creates modern CSS with flexbox/grid
- Writes clean, commented JavaScript
- Follows best practices automatically

### Live Preview System

The preview system:
- Updates in real-time as you code
- Runs in a sandboxed iframe for security
- Supports responsive viewport testing
- Handles HTML, CSS, and JavaScript execution

### Monaco Editor Integration

Uses the Monaco Editor (VS Code's editor):
- Full syntax highlighting
- IntelliSense and auto-completion
- Multiple language support
- Customizable themes
- Professional editing experience

## 🔐 Security & Privacy

- **API Keys**: Stored locally in browser (localStorage)
- **No Server**: Runs entirely in the browser
- **Sandboxed Preview**: Isolated code execution
- **No Data Collection**: Your projects stay on your device

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues & Limitations

- Requires OpenAI API key (costs apply based on usage)
- GPT-4 API calls may take a few seconds
- Preview refresh may be needed for complex JavaScript
- LocalStorage has size limitations for projects

## 🗺️ Roadmap

- [ ] User authentication and cloud storage
- [ ] Collaborative editing
- [ ] Component library
- [ ] Version control integration
- [ ] Direct deployment to Vercel/Netlify
- [ ] Image upload and management
- [ ] CSS framework integration (Bootstrap, Material-UI)
- [ ] Multiple page support
- [ ] Database integration templates

## 💡 Tips & Tricks

1. **Be Specific**: The more detailed your prompts, the better the AI's output
2. **Iterate**: Start simple, then ask AI to enhance specific parts
3. **Manual Polish**: AI gets you 80% there, add your personal touch
4. **Use Templates**: Start with a template for faster development
5. **Save Often**: Use the save feature to preserve your work

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🎉 Acknowledgments

- Built with [React](https://react.dev)
- Powered by [OpenAI](https://openai.com)
- Editor by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide](https://lucide.dev)

---

**Made with ❤️ by the VibeCoder team**

*Build websites at the speed of thought with AI!* 🚀
