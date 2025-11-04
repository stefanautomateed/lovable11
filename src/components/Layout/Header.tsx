import { useState } from 'react';
import { useStore } from '../../store/useStore';
import {
  Download,
  FileDown,
  Sparkles,
  Settings,
  FolderOpen,
  Save,
  FileCode2,
  X
} from 'lucide-react';
import { exportAsZip, downloadHTML } from '../../utils/export';
import { templates } from '../../utils/templates';

export default function Header() {
  const { files, saveProject, resetToTemplate, currentProject } = useStore();
  const [showSettings, setShowSettings] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('openai_api_key') || '');

  const handleExportZip = () => {
    exportAsZip(files, currentProject?.name || 'my-website');
  };

  const handleExportHTML = () => {
    downloadHTML(files, 'index.html');
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    setShowSettings(false);
    alert('API Key saved successfully!');
  };

  const handleSelectTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      resetToTemplate(template.files);
      setShowTemplates(false);
    }
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <h1 className="text-xl font-bold">VibeCoder</h1>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">AI Powered</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTemplates(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <FolderOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Templates</span>
              </button>

              <button
                onClick={saveProject}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </button>

              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <button
                    onClick={handleExportHTML}
                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-t-lg"
                  >
                    <FileCode2 className="w-4 h-4" />
                    Download HTML
                  </button>
                  <button
                    onClick={handleExportZip}
                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-b-lg"
                  >
                    <FileDown className="w-4 h-4" />
                    Download ZIP
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              <button onClick={() => setShowSettings(false)}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OpenAI API Key
                </label>
                {import.meta.env.VITE_OPENAI_API_KEY ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                    <p className="text-sm text-green-800">
                      ✓ API key configured via environment variable
                    </p>
                  </div>
                ) : (
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Get your API key from{' '}
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    OpenAI Platform
                  </a>
                </p>
                {!import.meta.env.VITE_OPENAI_API_KEY && (
                  <p className="text-xs text-gray-500 mt-2">
                    💡 For Vercel deployment: Set <code className="bg-gray-100 px-1 rounded">VITE_OPENAI_API_KEY</code> in environment variables
                  </p>
                )}
              </div>
              {!import.meta.env.VITE_OPENAI_API_KEY && (
                <button
                  onClick={handleSaveApiKey}
                  className="w-full btn-primary"
                >
                  Save Settings
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Templates Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Choose a Template</h2>
              <button onClick={() => setShowTemplates(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template.id)}
                  className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-gray-800 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
