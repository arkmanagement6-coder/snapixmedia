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
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm6.59-4.846c1.666.988 3.396 1.472 5.354 1.473 5.398 0 9.784-4.385 9.788-9.782.002-2.614-1.011-5.071-2.854-6.914C17.09 2.087 14.629.989 12.016.989c-5.4 0-9.791 4.387-9.795 9.785-.001 2.052.548 3.861 1.586 5.485L2.83 20.897l4.817-1.261zM16.821 13.91c-.266-.134-1.574-.775-1.817-.864-.243-.089-.419-.134-.595.134-.176.268-.68 1.85-.834 2.029-.154.179-.308.201-.574.067-.266-.134-1.125-.415-2.143-1.323-.79-.705-1.324-1.577-1.479-1.846-.155-.268-.016-.413.118-.546.121-.12.266-.312.4-.467.135-.156.179-.268.27-.446.09-.178.045-.335-.022-.469-.067-.134-.595-1.428-.815-1.964-.215-.515-.432-.446-.595-.454-.153-.008-.33-.008-.507-.008-.177 0-.466.067-.71.335-.243.268-.928.907-.928 2.21 0 1.303.947 2.56 1.08 2.728.133.167 1.864 2.846 4.516 3.992.631.272 1.124.436 1.509.559.635.2 1.213.171 1.67.103.51-.077 1.574-.643 1.795-1.262.221-.619.221-1.15.154-1.262-.066-.113-.243-.179-.508-.313z" />
          </svg>
          
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
