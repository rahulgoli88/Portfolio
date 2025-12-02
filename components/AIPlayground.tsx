import React, { useState, useRef } from 'react';
import { Sparkles, Upload, ArrowRight, Loader2, Image as ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

export const AIPlayground: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setSelectedImage(base64);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;
    if (!prompt.trim()) {
      setError("Please enter a prompt describing how to edit the image.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      setGeneratedImage(result);
    } catch (err: any) {
      setError("Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-12 bg-slate-900 border-t border-slate-800" id="ai-playground">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Powered by Gemini 2.5 Flash</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-3">AI Image Workbench</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience the power of multimodal AI. Upload a technical diagram or any image and use natural language to modify or enhance it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-xl backdrop-blur-sm">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Input Section */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-slate-200">1. Upload Image</h3>
                
                <div 
                  onClick={triggerFileInput}
                  className={`border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    selectedImage ? 'border-cyan-500/50 bg-slate-900/50' : 'border-slate-600 hover:border-cyan-400 hover:bg-slate-700/30'
                  }`}
                >
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Source" 
                      className="h-full w-full object-contain rounded-lg p-2" 
                    />
                  ) : (
                    <div className="text-center p-6">
                      <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-300 font-medium">Click to upload</p>
                      <p className="text-slate-500 text-sm mt-1">Supports JPG, PNG</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">2. Enter Instruction</h3>
                  <div className="relative">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., 'Add a red led indicator to the board' or 'Make it look like a sketch'"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none resize-none h-24"
                    />
                    <button
                      onClick={handleGenerate}
                      disabled={isLoading || !selectedImage || !prompt}
                      className="absolute bottom-3 right-3 bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Generate"
                    >
                      {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                </div>
              </div>

              {/* Output Section */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-slate-200">3. Result</h3>
                <div className="border border-slate-700 bg-slate-900/50 rounded-xl h-[420px] flex items-center justify-center overflow-hidden relative">
                  {generatedImage ? (
                    <img 
                      src={generatedImage} 
                      alt="Generated" 
                      className="h-full w-full object-contain" 
                    />
                  ) : isLoading ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mx-auto mb-4" />
                      <p className="text-cyan-400 animate-pulse">Processing with Gemini...</p>
                    </div>
                  ) : (
                    <div className="text-center text-slate-500">
                      <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                      <p>Generative output will appear here</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};