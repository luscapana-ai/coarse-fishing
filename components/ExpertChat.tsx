import React, { useState, useRef, useEffect } from 'react';
import { getExpertAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, User, MessageCircle, Loader2, X } from 'lucide-react';

interface ExpertChatProps {
  onClose?: () => void;
}

const ExpertChat: React.FC<ExpertChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm RiverKeeper. Do you have a question about bait, species identification, or local rules? Ask away!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API (map internal ChatMessage to service expectation)
    const history = messages.map(m => ({
        role: m.role,
        text: m.text
    }));

    const responseText = await getExpertAdvice(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-slate-900 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500 rounded-full">
                <MessageCircle className="text-white" size={20} />
            </div>
            <div>
                <h1 className="text-lg font-bold text-white">Ask an Expert</h1>
                <p className="text-xs text-teal-400">RiverKeeper • Online</p>
            </div>
        </div>
        {onClose && (
            <button onClick={onClose} className="text-slate-400 hover:text-white p-2">
                <X size={24} />
            </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div 
              key={msg.id} 
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[85%] md:max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-slate-200' : 'bg-teal-100'}`}>
                    {isUser ? <User size={16} className="text-slate-600"/> : <MessageCircle size={16} className="text-teal-600"/>}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  isUser 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                  <span className={`text-[10px] mt-2 block opacity-60 ${isUser ? 'text-slate-300' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {isLoading && (
           <div className="flex justify-start">
             <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 flex items-center gap-2 shadow-sm ml-10">
                <Loader2 size={16} className="animate-spin text-teal-600" />
                <span className="text-xs text-slate-500">Typing...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSend} className="relative max-w-4xl mx-auto">
          <input
            type="text"
            className="w-full bg-slate-100 text-slate-800 placeholder-slate-500 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
            placeholder="E.g. What is the best bait for Tench in spring?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertChat;