"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, MessageCircle } from "lucide-react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification bubble after 5 seconds to grab user attention
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919675818088"; // Active WhatsApp Number
    const text = encodeURIComponent(
      "Hello Snapix Media! I am interested in building a project/scaling my marketing campaign. Let's talk!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Floating Action Button */}
      <div className="relative">
        <button
          onClick={handleOpenChat}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 relative group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Active online pulse dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full animate-pulse" />
        </button>

        {/* Attention Grabber Notification Bubble */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 w-64 p-4 rounded-2xl bg-white border border-slate-250/80 shadow-2xl flex flex-col gap-2 pointer-events-auto cursor-pointer"
              onClick={handleOpenChat}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold uppercase text-emerald-600 tracking-wider">Support Online</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotification(false);
                  }}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-650 font-semibold leading-relaxed">
                👋 Hello! How can we assist with your development or marketing goals today?
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="absolute bottom-18 right-0 w-80 rounded-3xl bg-white/95 border border-slate-200/80 backdrop-blur-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-emerald-600 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center font-bold text-black text-sm">
                  SM
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Snapix Media Support</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 flex flex-col gap-3 min-h-[160px] bg-slate-50/40 max-h-60 overflow-y-auto">
              <div className="bg-slate-50 border border-slate-200/60 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                <p className="text-xs text-slate-500 font-semibold mb-1">Support Agent</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Hi! Thanks for checking out Snapix Media. Let me know what you are looking to build or grow!
                </p>
                <span className="text-[9px] text-slate-400 float-right mt-1">Just now</span>
              </div>
            </div>

            {/* Footer Form Input */}
            <div className="p-4 border-t border-slate-200/80 flex gap-2 bg-slate-50">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                Open WhatsApp Chat
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
