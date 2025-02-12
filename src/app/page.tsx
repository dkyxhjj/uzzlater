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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Uzz Translator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Transform your text into the magical language of Uzz</p>
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="input" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Input Text
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Type something...
              </span>
            </div>
            <textarea
              id="input"
              value={input}
              onChange={handleInputChange}
              className="w-full h-32 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
              placeholder="Enter your text here..."
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-sm text-gray-500 bg-white/80 dark:bg-gray-800/80 dark:text-gray-400">
                Uzz Translation
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="output" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Translated Text
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {output ? 'Translation complete!' : 'Waiting for input...'}
              </span>
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-32 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-inner"
              placeholder="Your Uzz translation will appear here..."
            />
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by the Uzz community
        </footer>
      </div>
    </div>
  );
}
