import { useState, useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { generateCode } from '../../api/openai';

export default function ChatPanel() {
  const { messages, addMessage, isGenerating, setIsGenerating, files, setFiles } = useStore();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    addMessage({
      role: 'user',
      content: userMessage
    });

    setIsGenerating(true);

    try {
      // Call GPT API to generate code
      const response = await generateCode(userMessage, files);

      // Add assistant message
      addMessage({
        role: 'assistant',
        content: response.message
      });

      // Update files if code was generated
      if (response.files) {
        setFiles(response.files);
      }
    } catch (error) {
      console.error('Error generating code:', error);
      addMessage({
        role: 'assistant',
        content: '❌ Sorry, there was an error generating the code. Please make sure your API key is configured and try again.'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="chat-panel">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
        <Sparkles className="w-5 h-5 text-white" />
        <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <Sparkles className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-sm">Start a conversation with the AI</p>
            <p className="text-xs mt-2 text-gray-400">
              Try: "Create a landing page with a hero section"
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))
        )}
        {isGenerating && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <p className="text-sm text-gray-600">Generating...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your website..."
            disabled={isGenerating}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isGenerating}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          💡 Tip: Be specific about what you want to create
        </p>
      </form>
    </div>
  );
}
