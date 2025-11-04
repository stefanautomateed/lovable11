import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import type { FileContent } from '../types';

export async function exportAsZip(files: FileContent, projectName: string = 'website') {
  const zip = new JSZip();

  // Add HTML file
  zip.file('index.html', files.html);

  // Add CSS file
  zip.file('styles.css', files.css);

  // Add JavaScript file
  zip.file('script.js', files.javascript);

  // Add README
  zip.file('README.md', `# ${projectName}

Created with VibeCoder - AI Website Builder

## Files

- index.html - Main HTML file
- styles.css - Stylesheet
- script.js - JavaScript file

## How to use

Simply open index.html in your web browser to view your website.

To host online, upload these files to any web hosting service.
`);

  // Generate and download the zip file
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, `${projectName}.zip`);
}

export function exportAsHTML(files: FileContent): string {
  // Create a complete HTML file with embedded CSS and JS
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <style>
${files.css}
    </style>
</head>
<body>
${files.html.replace(/<head>[\s\S]*?<\/head>/i, '').replace(/<\/?html[^>]*>/gi, '').replace(/<\/?body[^>]*>/gi, '')}
    <script>
${files.javascript}
    </script>
</body>
</html>`;
}

export function downloadHTML(files: FileContent, filename: string = 'index.html') {
  const html = exportAsHTML(files);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  saveAs(blob, filename);
}
