import { useStore } from '../../store/useStore';
import type { EditorTab, EditorLanguage } from '../../types';
import CodeEditor from './CodeEditor';
import { Code2, FileCode, FileJson } from 'lucide-react';

const tabs: EditorTab[] = [
  { id: 'html', label: 'HTML', language: 'html' },
  { id: 'css', label: 'CSS', language: 'css' },
  { id: 'javascript', label: 'JavaScript', language: 'javascript' }
];

const getIcon = (language: EditorLanguage) => {
  switch (language) {
    case 'html':
      return <Code2 className="w-4 h-4" />;
    case 'css':
      return <FileCode className="w-4 h-4" />;
    case 'javascript':
      return <FileJson className="w-4 h-4" />;
  }
};

export default function EditorPanel() {
  const { files, activeTab, setActiveTab, updateFileName } = useStore();

  const handleCodeChange = (content: string) => {
    updateFileName(activeTab, content);
  };

  return (
    <div className="editor-panel flex flex-col h-full">
      {/* Tab Bar */}
      <div className="flex items-center bg-gray-800 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors
              ${activeTab === tab.id
                ? 'bg-gray-900 text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }
            `}
          >
            {getIcon(tab.language)}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-hidden">
        <CodeEditor
          language={activeTab}
          value={files[activeTab]}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
}
