import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini, ChatMessage } from '../services/gemini';
import { Language } from '../App';

interface ChatWidgetProps {
  language: Language;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const initialMessages = {
    zh: { role: 'model', text: "你好！我是陈子卓野的 AI 助手。你可以问我关于他的项目管理经验、技术背景，或者他的高达收藏！" },
    en: { role: 'model', text: "Hello! I am Joe Chen's AI Assistant. Ask me about his project management experience, technical background, or his Gunpla collection!" }
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    initialMessages[language] as ChatMessage
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clear history when language changes (optional, but cleaner UI)
  useEffect(() => {
    setMessages([initialMessages[language] as ChatMessage]);
  }, [language]);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setIsLoading(true);

    // Optimistic update
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);

    // API Call with Language context
    const responseText = await sendMessageToGemini(messages, userMsg, language);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const uiText = {
    zh: { title: 'AI 智能助手', placeholder: '询问关于陈子卓野...', sending: '发送' },
    en: { title: 'AI Assistant', placeholder: 'Ask about Joe Chen...', sending: 'Send' }
  };

  const t = uiText[language];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-gunpla-blue/50 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up origin-bottom-right transition-colors duration-300">
          
          {/* Header */}
          <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-tech font-bold text-slate-800 dark:text-white">{t.title}</span>
            </div>
            <button onClick={toggleChat} className="text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/90 transition-colors duration-300">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gunpla-blue text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-gray-200 rounded-bl-none border border-slate-100 dark:border-slate-600'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-lg rounded-bl-none flex gap-1 border border-slate-100 dark:border-slate-600 shadow-sm">
                  <div className="w-2 h-2 bg-slate-400 dark:bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 dark:bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-slate-400 dark:bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex gap-2 transition-colors duration-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:border-gunpla-blue transition-colors"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-gunpla-blue text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat} 
        className={`${isOpen ? 'bg-slate-600' : 'bg-gunpla-blue hover:scale-110'} text-white p-4 rounded-full shadow-lg hover:shadow-gunpla-blue/50 transition-all duration-300 flex items-center justify-center group`}
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;