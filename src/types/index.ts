export interface FileContent {
  html: string;
  css: string;
  javascript: string;
}

export interface Project {
  id: string;
  name: string;
  files: FileContent;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatHistory {
  messages: Message[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  files: FileContent;
  category: 'landing' | 'portfolio' | 'blog' | 'business' | 'blank';
}

export type EditorLanguage = 'html' | 'css' | 'javascript';

export interface EditorTab {
  id: EditorLanguage;
  label: string;
  language: EditorLanguage;
}
