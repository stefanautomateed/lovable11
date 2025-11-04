import type { FileContent } from '../types';

interface GenerateCodeResponse {
  message: string;
  files?: Partial<FileContent>;
}

const SYSTEM_PROMPT = `You are an expert web developer AI assistant. Your job is to help users create and modify websites using HTML, CSS, and JavaScript.

When a user asks you to create or modify a website:
1. Analyze their request carefully
2. Generate clean, modern, and responsive code
3. Return the code in a structured format
4. Include helpful explanations

Always follow these rules:
- Write semantic HTML5
- Use modern CSS with flexbox/grid
- Write clean, commented JavaScript
- Make responsive designs
- Follow best practices
- Keep code readable and maintainable

When returning code, format your response like this:

HTML:
\`\`\`html
[HTML code here]
\`\`\`

CSS:
\`\`\`css
[CSS code here]
\`\`\`

JavaScript:
\`\`\`javascript
[JavaScript code here]
\`\`\`

Then provide a brief explanation of what you created.`;

function parseCodeBlocks(content: string): Partial<FileContent> {
  const files: Partial<FileContent> = {};

  // Extract HTML
  const htmlMatch = content.match(/HTML:\s*```html\n([\s\S]*?)```/i);
  if (htmlMatch) {
    files.html = htmlMatch[1].trim();
  }

  // Extract CSS
  const cssMatch = content.match(/CSS:\s*```css\n([\s\S]*?)```/i);
  if (cssMatch) {
    files.css = cssMatch[1].trim();
  }

  // Extract JavaScript
  const jsMatch = content.match(/JavaScript:\s*```(?:javascript|js)\n([\s\S]*?)```/i);
  if (jsMatch) {
    files.javascript = jsMatch[1].trim();
  }

  return files;
}

function getApiKey(): string | null {
  // First, try to get from environment variable (Vercel, etc.)
  // Environment variables in Vite must be prefixed with VITE_
  const envKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (envKey) {
    console.log('Using API key from environment variable');
    return envKey;
  }

  // Fall back to localStorage (user settings)
  const localKey = localStorage.getItem('openai_api_key');
  if (localKey) {
    console.log('Using API key from local storage');
    return localKey;
  }

  return null;
}

export async function generateCode(
  userPrompt: string,
  currentFiles: FileContent
): Promise<GenerateCodeResponse> {
  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error(
      'OpenAI API key not found. Please either:\n\n' +
      '1. Set it in Settings (top right corner), OR\n' +
      '2. Add VITE_OPENAI_API_KEY to your environment variables in Vercel'
    );
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: `Current code context:

HTML:
\`\`\`html
${currentFiles.html}
\`\`\`

CSS:
\`\`\`css
${currentFiles.css}
\`\`\`

JavaScript:
\`\`\`javascript
${currentFiles.javascript}
\`\`\`

User request: ${userPrompt}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to generate code');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse code blocks from response
    const files = parseCodeBlocks(content);

    return {
      message: content,
      files: Object.keys(files).length > 0 ? files : undefined,
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
}
