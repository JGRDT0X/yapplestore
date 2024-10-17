import React, { useState, useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';

// Define the meme template interface
interface MemeTemplate {
  id: string;
  name: string;
  url: string;
}

// Add some sample meme templates
const memeTemplates: MemeTemplate[] = [
  { id: 'template1', name: 'Drake', url: '/meme-templates/dog.jpg' },
  { id: 'template2', name: 'Distracted Boyfriend', url: '/meme-templates/dark.jpg' },
  { id: 'template3', name: 'Two Buttons', url: '/meme-templates/dog.jpg' },
  // Add more templates as needed
];

interface Meme {
  topText: string;
  centerText: string;
  bottomText: string;
  image: string | null;
}

function MemeGenerator() {
  const [meme, setMeme] = useState<Meme>({
    topText: '',
    centerText: '',
    bottomText: '',
    image: null,
  });

  const [templates, setTemplates] = useState<MemeTemplate[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // In a real application, you might fetch this from an API
    setTemplates(memeTemplates);
  }, []);

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setMeme(prevMeme => ({
          ...prevMeme,
          image: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function exportMeme() {
    if (fileInputRef.current === null) {
      return;
    }

    toPng(fileInputRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-meme.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error exporting meme:', err);
      });
  }

  function handleTemplateSelect(template: MemeTemplate) {
    setMeme(prevMeme => ({
      ...prevMeme,
      image: template.url,
    }));
  }

  return (
    <div id="memespace" className="flex flex-col items-center p-4">
      <h4 className='my-8'>🗣️ yap it up 🗣️</h4>

      <div className="w-full max-w-md mb-6 space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border-dotted border text-xs border-black rounded"
        />
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleTextChange}
          className="w-full p-2 border text-xs border-black rounded"
        />
        <input
          type="text"
          placeholder="Center text"
          name="centerText"
          value={meme.centerText}
          onChange={handleTextChange}
          className="w-full p-2 border text-xs border-black rounded"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleTextChange}
          className="w-full p-2 border text-xs border-black rounded"
        />
      </div>

      <div className="w-full max-w-md mb-6">
        <div className="relative" ref={fileInputRef}>
          {meme.image && (
            <div className="relative">
              <img src={meme.image} alt="Uploaded meme" className="w-full h-auto" />
              <h2 className="absolute text-stroke-1 top-2 left-1/2 transform -translate-x-1/2 text-white text-2xl text-center w-11/12 font-bold shadow-text">
                {meme.topText}
              </h2>
              <h2 className="absolute text-stroke-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center w-11/12 font-bold shadow-text">
                {meme.centerText}
              </h2>
              <h2 className="absolute text-stroke-1 bottom-2 left-1/2 transform -translate-x-1/2 text-white text-2xl text-center w-11/12 font-bold shadow-text">
                {meme.bottomText}
              </h2>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={exportMeme}
        className="p-1 text-xs bg-black text-white rounded-none hover:bg-opacity-75 transition-colors mb-6"
      >
        Save it up
      </button>

      <div className="w-full max-w-md mb-6 space-y-4">
        <h5 className="text-center">Choose a template</h5>
        <div className="grid grid-cols-3 gap-4">
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className="p-2 border border-black rounded hover:bg-gray-100"
            >
              <img src={template.url} alt={template.name} className="w-full h-auto" />
              <p className="mt-1 text-xs text-center">{template.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
