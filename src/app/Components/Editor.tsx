import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

const Editor = () => {
  const [htmlContent, setHtmlContent] = useState('');

  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  if (Quill && !quill) {
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta : any, oldContents : any) => {
        console.log('Text change!');
        console.log(delta);

        let currentContents = quill.getContents();
        console.log(currentContents.diff(oldContents));

        // Get HTML content
        const html = quill.root.innerHTML;
        setHtmlContent(html);
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
      <div className="mt-4">
        <h2>HTML Value:</h2>
        <pre>{htmlContent}</pre>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default Editor;