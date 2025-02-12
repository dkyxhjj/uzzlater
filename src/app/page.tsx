'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translateToUzz = (text: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return text.split(' ').map(word => {
      if (!word) return word;
      
      const lastChar = word.toLowerCase().slice(-1);
      const isLastCharVowel = vowels.includes(lastChar);
      
      if (isLastCharVowel) {
        return word.slice(0, -1) + 'uzz';
      } else {
        return word + 'uzz';
      }
    }).join(' ');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    setOutput(translateToUzz(newInput));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Uzz Translator
          </h1>
          <p className="text-gray-300">Transform your text into the magical language of Uzz</p>
        </div>
        
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="input" className="text-sm font-medium text-gray-200">
                Input Text
              </label>
              <span className="text-xs text-gray-400">
                Type something...
              </span>
            </div>
            <textarea
              id="input"
              value={input}
              onChange={handleInputChange}
              className="w-full h-32 p-4 rounded-xl border-2 border-gray-700 bg-gray-900/50 text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out shadow-sm hover:shadow-md placeholder-gray-500"
              placeholder="Enter your text here..."
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-sm text-gray-400 bg-gray-800/40">
                Uzz Translation
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="output" className="text-sm font-medium text-gray-200">
                Translated Text
              </label>
              <span className="text-xs text-gray-400">
                {output ? 'Translation complete!' : 'Waiting for input...'}
              </span>
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-32 p-4 rounded-xl border-2 border-gray-700 bg-gray-900/70 text-gray-100 shadow-inner placeholder-gray-500"
              placeholder="Your Uzz translation will appear here..."
            />
          </div>
        </div>

        <footer className="text-center text-sm text-gray-400">
          Made with ❤️ by the Uzz community
        </footer>
      </div>
    </div>
  );
}
