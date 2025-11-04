import { useMemo } from 'react';
import { useStore } from '../../store/useStore';
import { RefreshCw, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useState } from 'react';

type ViewportSize = 'mobile' | 'tablet' | 'desktop';

export default function PreviewPanel() {
  const { files } = useStore();
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop');
  const [refreshKey, setRefreshKey] = useState(0);

  // Generate the HTML content for the iframe using srcdoc
  const previewContent = useMemo(() => {
    // Extract just the body content from HTML
    const bodyContent = files.html
      .replace(/<head>[\s\S]*?<\/head>/i, '')
      .replace(/<\/?html[^>]*>/gi, '')
      .replace(/<\/?body[^>]*>/gi, '');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${files.css}</style>
</head>
<body>
  ${bodyContent}
  <script>${files.javascript}<\/script>
</body>
</html>`;
  }, [files, refreshKey]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const getViewportWidth = () => {
    switch (viewportSize) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
        return '100%';
    }
  };

  return (
    <div className="preview-panel flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Preview</h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport Size Toggles */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewportSize('mobile')}
              className={`p-2 rounded transition-colors ${
                viewportSize === 'mobile'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportSize('tablet')}
              className={`p-2 rounded transition-colors ${
                viewportSize === 'tablet'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewportSize('desktop')}
              className={`p-2 rounded transition-colors ${
                viewportSize === 'desktop'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            title="Refresh Preview"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        <div
          className="bg-white shadow-2xl transition-all duration-300 h-full"
          style={{
            width: getViewportWidth(),
            maxWidth: '100%'
          }}
        >
          <iframe
            key={refreshKey}
            title="preview"
            srcDoc={previewContent}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-modals allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}
