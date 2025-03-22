import { useState } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  // Editor configuration
  const config = {
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|', 
      'font', 'fontsize', 'brush', '|',
      'table', '|',  // Table support
      'align', '|',
      'undo', 'redo'
    ],
    language: 'en',
    height: 500,
    uploader: {
      insertImageAsBase64URI: true
    }
  };

  return (
    <JoditEditor
      value={content}
      config={config}
      onBlur={newContent => setContent(newContent)}
    />
  );
};

export default RichTextEditor;