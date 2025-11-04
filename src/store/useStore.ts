import { create } from 'zustand';
import type { FileContent, Message, Project, EditorLanguage } from '../types';

interface AppState {
  // Project State
  currentProject: Project | null;
  projects: Project[];

  // Editor State
  files: FileContent;
  activeTab: EditorLanguage;

  // Chat State
  messages: Message[];
  isGenerating: boolean;

  // UI State
  showChat: boolean;
  showPreview: boolean;

  // Actions
  setFiles: (files: Partial<FileContent>) => void;
  setActiveTab: (tab: EditorLanguage) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  setIsGenerating: (isGenerating: boolean) => void;
  toggleChat: () => void;
  togglePreview: () => void;
  createNewProject: (name: string) => void;
  saveProject: () => void;
  loadProject: (projectId: string) => void;
  updateFileName: (language: EditorLanguage, content: string) => void;
  resetToTemplate: (files: FileContent) => void;
}

const defaultFiles: FileContent = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to VibeCoder</h1>
        <p>Start building your website with AI!</p>
        <button onclick="showAlert()">Click Me</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
  css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 500px;
}

h1 {
    color: #667eea;
    margin-bottom: 1rem;
    font-size: 2.5rem;
}

p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}`,
  javascript: `function showAlert() {
    alert('Hello from VibeCoder! 🚀');
}

// Add interactive features here
console.log('VibeCoder is ready!');`
};

export const useStore = create<AppState>((set, get) => ({
  // Initial State
  currentProject: null,
  projects: [],
  files: defaultFiles,
  activeTab: 'html',
  messages: [],
  isGenerating: false,
  showChat: true,
  showPreview: true,

  // Actions
  setFiles: (newFiles) => set((state) => ({
    files: { ...state.files, ...newFiles }
  })),

  setActiveTab: (tab) => set({ activeTab: tab }),

  addMessage: (message) => set((state) => ({
    messages: [
      ...state.messages,
      {
        ...message,
        id: Date.now().toString(),
        timestamp: new Date()
      }
    ]
  })),

  clearMessages: () => set({ messages: [] }),

  setIsGenerating: (isGenerating) => set({ isGenerating }),

  toggleChat: () => set((state) => ({ showChat: !state.showChat })),

  togglePreview: () => set((state) => ({ showPreview: !state.showPreview })),

  createNewProject: (name) => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      files: get().files,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    set((state) => ({
      currentProject: newProject,
      projects: [...state.projects, newProject]
    }));
  },

  saveProject: () => {
    const { currentProject, files } = get();
    if (currentProject) {
      const updatedProject = {
        ...currentProject,
        files,
        updatedAt: new Date()
      };
      set((state) => ({
        currentProject: updatedProject,
        projects: state.projects.map(p =>
          p.id === currentProject.id ? updatedProject : p
        )
      }));

      // Save to localStorage
      localStorage.setItem('vibecoder_projects', JSON.stringify(get().projects));
    }
  },

  loadProject: (projectId) => {
    const project = get().projects.find(p => p.id === projectId);
    if (project) {
      set({
        currentProject: project,
        files: project.files
      });
    }
  },

  updateFileName: (language, content) => {
    set((state) => ({
      files: {
        ...state.files,
        [language]: content
      }
    }));
  },

  resetToTemplate: (files) => set({ files })
}));
