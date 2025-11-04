import Header from './components/Layout/Header';
import EditorPanel from './components/Editor/EditorPanel';
import PreviewPanel from './components/Preview/PreviewPanel';
import ChatPanel from './components/Chat/ChatPanel';
import { useStore } from './store/useStore';

function App() {
  const { showChat, showPreview } = useStore();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Panel */}
        <div className={`${showPreview ? 'w-1/2' : 'flex-1'} transition-all duration-300`}>
          <EditorPanel />
        </div>

        {/* Preview Panel */}
        {showPreview && (
          <div className="w-1/2 transition-all duration-300">
            <PreviewPanel />
          </div>
        )}

        {/* Chat Panel */}
        {showChat && (
          <div className="transition-all duration-300">
            <ChatPanel />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
