import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Parekh Silk Fabric. How can I help you regarding our wholesale silk collections today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let aiText = "";
      const lowerInput = input.toLowerCase();
      
      const responses = [
        { keywords: ['hi', 'hello', 'hey', 'namaste', 'morning', 'evening'], reply: "Hello! Welcome to Parekh Silk Fabric. How can I assist you with our wholesale silk collections today?" },
        { keywords: ['wholesale', 'bulk', 'b2b', 'quantity', 'minimum', 'moq'], reply: "Our minimum order quantity (MOQ) varies by fabric. Standard Mulberry silk rolls require a 50-meter MOQ. We provide robust B2B factory pricing for bulk orders over 500 meters." },
        { keywords: ['price', 'cost', 'rate', 'how much', 'pricing', 'rupee'], reply: "As a wholesale manufacturer, our rates are exceptionally competitive. Pure Mulberry Silk starts at ₹800/meter. You can check our 'Product' page for a detailed catalog or submit an e-Quotation for bulk pricing." },
        { keywords: ['mulberry', 'raw', 'tussar', 'muga', 'eri', 'chiffon', 'georgette', 'jacquard', 'velvet', 'types', 'product', 'catalog', 'catalogue'], reply: "We specialize in premium pure silks including Mulberry, Tussar, Muga, Raw Silk, Chiffon, Georgette, and Jacquard weaves. Check our 'Product' section in the Header to browse our 150+ varieties." },
        { keywords: ['contact', 'address', 'visit', 'location', 'phone', 'email', 'call', 'where'], reply: "You can reach our wholesale dispatch team at wholesale@hcparekhsilk.com or call +91-9876543210. Our factory is located in Surat, Gujarat. We'd love to schedule a visit!" },
        { keywords: ['quality', 'pure', 'fabric', 'tc', 'thread', 'authentic', 'real', 'fake'], reply: "Parekh strictly guarantees 100% pure, authentic silk. Every yard undergoes intensive quality checks (average 144 TC for standard rolls) before wholesale dispatch." },
        { keywords: ['shipping', 'delivery', 'transport', 'export', 'time', 'when', 'days'], reply: "We handle global shipping and PAN-India secure transport. Standard bulk orders take 10-15 business days for dispatch. For logistics, we rely on insured company transporters." },
        { keywords: ['tender', 'auction', 'contract', 'e-auction', 'quotation'], reply: "We run corporate rate contracts and e-Auctions for industrial textile machinery. Please visit our 'Pages' dropdown to access the e-Quotation or Tender forms." },
        { keywords: ['owner', 'founder', 'ceo', 'management', 'who are you', 'company'], reply: "Parekh Silk Fabric is a legacy institution led by our visionary Founder & CEO Aditya Parekh. We focus purely on preserving heritage weaving and industrial textile scaling." },
        { keywords: ['custom', 'dye', 'color', 'pattern', 'design', 'customization'], reply: "Yes! We offer massive customization for B2B bulk orders including custom dyeing, specific Pantone matching, and bespoke Jacquard pattern weaving. Contact Sales directly for requirements." },
      ];

      // Find the best match
      let bestMatch = responses.find(r => r.keywords.some(kw => lowerInput.includes(kw)));
      
      if (bestMatch) {
        aiText = bestMatch.reply;
      } else {
        // Advanced randomized fallback
        const fallbacks = [
            "I'm an AI assistant for Parekh Wholesale. Could you clarify if you're looking for pricing, product catalogs, or contact info?",
            "I specialize in answering B2B wholesale queries about our Silk catalog. Could you rephrase your question?",
            "That's a very interesting question! For highly specific queries, please reach out to our team at the 'Contact Us' page.",
            "I can assist you with wholesale prices, MOQ, shipping, and fabric quality. What specifically would you like to know?"
        ];
        aiText = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiText, sender: 'ai' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`bg-white w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col border border-gray-100 transition-all duration-500 origin-bottom-right mb-4 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0 translate-x-0 h-[450px]' : 'scale-0 opacity-0 translate-y-10 translate-x-10 h-0 overflow-hidden absolute bottom-16 right-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8C7345] to-[#B79A63] text-white p-4 rounded-t-2xl flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Bot size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg leading-tight">Parekh AI</h3>
              <p className="text-xs text-white/90 font-light flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                Active now
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFBF7]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm text-sm leading-relaxed ${
                msg.sender === 'user' 
                ? 'bg-[#5C4A2A] text-white rounded-br-sm' 
                : 'bg-white border border-[#E6DBC4] text-[#333333] rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-3 border-t border-[#E6DBC4] bg-white rounded-b-2xl shrink-0">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about wholesale silk..."
              className="w-full bg-[#FDFBF7] border border-[#E6DBC4] rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-[#B79A63] focus:border-[#B79A63] text-[#333333] transition-all"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 w-[34px] h-[34px] flex items-center justify-center bg-gradient-to-r from-[#8C7345] to-[#B79A63] text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#8C7345] to-[#B79A63] hover:from-[#5C4A2A] hover:to-[#8C7345] text-white border-2 border-white/20 hover:shadow-[#B79A63]/40 hover:shadow-2xl z-50 animate-bounce"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
