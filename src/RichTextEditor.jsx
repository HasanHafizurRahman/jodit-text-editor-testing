// src/components/RichTextEditor.jsx
import { useState } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = () => {
  const [content, setContent] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const config = {
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|', 
      'font', 'fontsize', 'brush', '|',
      'table', 'image', '|',
      'align', '|',
      'undo', 'redo'
    ],
    language: 'en',
    height: 600,
    theme: darkMode ? 'dark' : 'default',
    uploader: {
      insertImageAsBase64URI: true
    },
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '16px'
    },
    table: {
      styles: {
        'border-collapse': 'collapse',
        'width': '100%'
      },
      defaultStyle: 'border: 2px solid #e0e0e0;',
      header: true
    },
    toolbarAdaptive: false
  };

  return (
    <div className={`editor-container ${darkMode ? 'dark' : ''}`}>
      <div className="toolbar-header">
        <h2>Jodit Text Editor Testing</h2>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      <JoditEditor
        value={content}
        config={config}
        onBlur={newContent => setContent(newContent)}
      />
      <div className="editor-footer">
        <span className="character-count">
          Characters: {content.length}
        </span>
        <div className="format-tips">
          ⚡ Tip: Right-click tables for advanced options
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;