import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  ChevronDown,
  RotateCcw,
  Send,
  User,
  Bot,
  ExternalLink,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  CheckCircle2,
  Maximize2,
} from "lucide-react";
import {
  KNOWLEDGE_BASE,
  MAIN_MENU_OPTIONS,
  findAnswerByQuery,
  BotKnowledgeItem,
} from "./chatbotData";
import "./Chatbot.css";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  timestamp: string;
  text?: string;
  paragraphs?: string[];
  bullets?: {
    heading?: string;
    items: string[];
  };
  extraNotes?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  serviceButtons?: {
    label: string;
    targetId: string;
  }[];
  options?: {
    label: string;
    targetId: string;
  }[];
  followUps?: {
    label: string;
    targetId: string;
  }[];
  showActions?: boolean;
}

export const Chatbot: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [hasUnreadNotice, setHasUnreadNotice] = useState<boolean>(true);
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; caption: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const createInitialWelcomeMessages = (): ChatMessage[] => [
    {
      id: "welcome-1",
      sender: "bot",
      timestamp: formatCurrentTime(),
      paragraphs: [
        "Hello! 👋 Welcome to TAB Technical Services.",
        "I'm your virtual assistant. I can help you understand our HVAC technical services.",
        "How can I help you today?",
      ],
      options: MAIN_MENU_OPTIONS,
      showActions: false,
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(createInitialWelcomeMessages);

  // Auto scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen, isMinimized]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnreadNotice(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleToggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleResetConversation = () => {
    setIsTyping(false);
    setMessages(createInitialWelcomeMessages());
  };

  const deliverBotAnswer = (targetId: string) => {
    const data: BotKnowledgeItem | undefined = KNOWLEDGE_BASE[targetId];

    if (!data) {
      // Fallback
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-fallback-${Date.now()}`,
          sender: "bot",
          timestamp: formatCurrentTime(),
          paragraphs: [
            "Sorry, I couldn't find an answer to your question. Please select one of the available options or contact our team.",
          ],
          options: MAIN_MENU_OPTIONS,
          showActions: true,
        },
      ]);
      setIsTyping(false);
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `bot-${data.id}-${Date.now()}`,
        sender: "bot",
        timestamp: formatCurrentTime(),
        text: data.title,
        paragraphs: data.answerParagraphs,
        bullets: data.bulletPoints,
        extraNotes: data.extraNotes,
        image: data.image,
        serviceButtons: data.serviceButtons,
        followUps: data.followUps,
        showActions: true,
      },
    ]);
    setIsTyping(false);
  };

  const handleSelectOption = (targetId: string, label?: string) => {
    if (isTyping) return;

    const optionLabel = label || MAIN_MENU_OPTIONS.find((o) => o.targetId === targetId)?.label || targetId;

    // 1. Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      timestamp: formatCurrentTime(),
      text: optionLabel,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Typing delay to simulate natural assistant thinking
    setTimeout(() => {
      deliverBotAnswer(targetId);
    }, 650);
  };

  const handleShowMainMenu = () => {
    if (isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-menu-${Date.now()}`,
      sender: "user",
      timestamp: formatCurrentTime(),
      text: "Show Main Menu",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-menu-${Date.now()}`,
          sender: "bot",
          timestamp: formatCurrentTime(),
          paragraphs: [
            "Here is the main menu. Please choose any topic to learn more about our HVAC testing, adjusting, balancing, and commissioning services:",
          ],
          options: MAIN_MENU_OPTIONS,
          showActions: false,
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
    // On mobile we minimize so the user sees the contact page
    if (window.innerWidth < 768) {
      setIsMinimized(true);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputText.trim();
    if (!query || isTyping) return;

    setInputText("");

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      timestamp: formatCurrentTime(),
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const matchId = findAnswerByQuery(query);

    setTimeout(() => {
      if (matchId) {
        deliverBotAnswer(matchId);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-notfound-${Date.now()}`,
            sender: "bot",
            timestamp: formatCurrentTime(),
            paragraphs: [
              "Sorry, I couldn't find an answer to your question.",
              "Please select one of the available options below, or contact our team directly.",
            ],
            options: MAIN_MENU_OPTIONS,
            showActions: true,
          },
        ]);
        setIsTyping(false);
      }
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
        {/* Unread teaser tooltip (visible before first click) */}
        {!isOpen && hasUnreadNotice && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 max-w-[260px] bg-card text-card-foreground border border-border shadow-xl rounded-2xl p-3.5 relative cursor-pointer group"
            onClick={handleOpenChat}
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary">TAB Technical Assistant</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Have questions about HVAC Testing & Balancing? Chat with us!
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHasUnreadNotice(false);
                }}
                className="text-muted-foreground hover:text-foreground text-xs p-1"
                aria-label="Dismiss notice"
              >
                <X size={13} />
              </button>
            </div>
            {/* Tooltip triangle */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-card border-r border-b border-border rotate-45" />
          </motion.div>
        )}

        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isOpen ? handleToggleMinimize : handleOpenChat}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#0e1a3b] via-[#162758] to-[#1e3a8a] text-white shadow-2xl shadow-primary/30 border-2 border-accent/40 focus:outline-none focus:ring-4 focus:ring-accent/30 group"
          aria-label={isOpen ? "Toggle chat window" : "Open TAB Technical Assistant"}
        >
          {isOpen ? (
            isMinimized ? (
              <MessageSquare size={26} className="text-white group-hover:rotate-12 transition-transform" />
            ) : (
              <ChevronDown size={28} className="text-white" />
            )
          ) : (
            <div className="relative">
              <MessageSquare size={26} className="text-white group-hover:scale-110 transition-transform" />
              {/* Online pulse badge */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[440px] h-[min(620px,calc(100vh-130px))] flex flex-col bg-card border border-border shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0f1b40] via-[#152758] to-[#1c3575] text-white p-4 sm:px-5 flex items-center justify-between border-b border-white/10 select-none shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Bot size={22} className="text-sky-300" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#152758]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base leading-tight tracking-wide text-white">
                    TAB Technical Services
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-sky-200">
                    <span>Virtual Assistant (Demo)</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-emerald-300 font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Header Action Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetConversation}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reset conversation"
                  aria-label="Restart chat"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={handleToggleMinimize}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Minimize chat"
                  aria-label="Minimize chat"
                >
                  <ChevronDown size={18} />
                </button>
                <button
                  onClick={handleCloseChat}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Close chat"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Conversation Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      msg.sender === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground shadow-sm"
                    }`}
                  >
                    {msg.sender === "user" ? <User size={15} /> : <Bot size={15} />}
                  </div>

                  {/* Message Bubble Container */}
                  <div
                    className={`max-w-[85%] space-y-2.5 ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none ml-auto"
                          : "bg-card text-card-foreground border border-border rounded-tl-none"
                      }`}
                    >
                      {/* Optional Title for Bot replies */}
                      {msg.text && msg.sender === "bot" && (
                        <h4 className="font-bold text-primary mb-1.5 text-[15px] border-b border-border/60 pb-1">
                          {msg.text}
                        </h4>
                      )}

                      {/* User message text */}
                      {msg.text && msg.sender === "user" && <p>{msg.text}</p>}

                      {/* Bot paragraphs */}
                      {msg.paragraphs && (
                        <div className="space-y-2">
                          {msg.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Bullet points if any */}
                      {msg.bullets && (
                        <div className="mt-2.5 pt-2 border-t border-border/50">
                          {msg.bullets.heading && (
                            <p className="font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                              {msg.bullets.heading}
                            </p>
                          )}
                          <ul className="space-y-1.5 text-xs sm:text-sm">
                            {msg.bullets.items.map((item, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5">
                                <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Extra notes */}
                      {msg.extraNotes && (
                        <p className="text-xs bg-muted/70 p-2 rounded-lg mt-2 text-muted-foreground font-medium">
                          {msg.extraNotes}
                        </p>
                      )}

                      {/* Technical Image Integration */}
                      {msg.image && (
                        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm group">
                          <div className="relative overflow-hidden cursor-pointer" onClick={() => setEnlargedImage(msg.image!)}>
                            <img
                              src={msg.image.src}
                              alt={msg.image.alt}
                              className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-black/60 text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                                <Maximize2 size={11} /> Enlarge
                              </span>
                            </div>
                          </div>
                          <p className="px-2.5 py-1.5 text-[11px] sm:text-xs text-muted-foreground italic bg-card/80 border-t border-border">
                            📷 {msg.image.caption}
                          </p>
                        </div>
                      )}

                      {/* Question 2: Interactive Service Buttons with clickable triggers */}
                      {msg.serviceButtons && (
                        <div className="mt-3 pt-2 border-t border-border/60">
                          <p className="font-semibold text-xs text-muted-foreground mb-2">
                            Select a service to view technical specifications:
                          </p>
                          <div className="grid gap-1.5">
                            {msg.serviceButtons.map((btn, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => handleSelectOption(btn.targetId, btn.label)}
                                className="flex items-center justify-between text-left text-xs bg-muted/60 hover:bg-accent hover:text-accent-foreground p-2.5 rounded-lg border border-border/80 transition-all font-medium group"
                              >
                                <span>{btn.label}</span>
                                <ArrowRight size={13} className="text-muted-foreground group-hover:text-accent-foreground transition-transform group-hover:translate-x-0.5" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <span className="block text-[10px] text-muted-foreground mt-1 text-right">
                        {msg.timestamp}
                      </span>
                    </div>

                    {/* Predefined Clickable Options (e.g. Initial Welcome Menu) */}
                    {msg.options && (
                      <div className="space-y-1.5 pt-1 w-full">
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-1">
                          Available Topics:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {msg.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(opt.targetId, opt.label)}
                              disabled={isTyping}
                              className="text-left text-xs bg-card hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary p-2.5 rounded-xl shadow-xs transition-all font-medium flex items-center justify-between group disabled:opacity-60"
                            >
                              <span className="line-clamp-1">{opt.label}</span>
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Follow-up Questions & Navigation Buttons */}
                    {msg.followUps && (
                      <div className="space-y-1.5 pt-1 w-full">
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-1">
                          Related Questions:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.followUps.map((fu, fIdx) => (
                            <button
                              key={fIdx}
                              onClick={() => handleSelectOption(fu.targetId, fu.label)}
                              disabled={isTyping}
                              className="text-xs bg-card hover:bg-accent hover:text-accent-foreground border border-border hover:border-accent px-3 py-1.5 rounded-full shadow-xs transition-colors font-medium flex items-center gap-1 disabled:opacity-60"
                            >
                              <span>{fu.label}</span>
                              <ArrowRight size={11} />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Standard Action Bar: Main Menu & Contact Us */}
                    {msg.showActions && (
                      <div className="flex items-center gap-2 pt-1 w-full">
                        <button
                          onClick={handleShowMainMenu}
                          disabled={isTyping}
                          className="flex-1 text-xs bg-muted/80 hover:bg-muted text-foreground border border-border px-3 py-1.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-colors disabled:opacity-60"
                        >
                          <Menu size={13} />
                          Main Menu
                        </button>
                        <button
                          onClick={handleNavigateToContact}
                          className="flex-1 text-xs bg-primary text-primary-foreground hover:opacity-90 px-3 py-1.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-opacity"
                        >
                          <Phone size={13} />
                          Contact Us
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Animation Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    <Bot size={15} />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-none p-3.5 shadow-sm">
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Strip above input */}
            <div className="px-3 py-2 bg-card border-t border-border flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
              <span className="text-muted-foreground flex-shrink-0 font-medium">Quick:</span>
              <button
                onClick={handleShowMainMenu}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-muted hover:bg-accent hover:text-accent-foreground text-foreground border border-border transition-colors font-medium"
              >
                Main Menu
              </button>
              <button
                onClick={() => handleSelectOption("hvac-services", "HVAC Services")}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-muted hover:bg-accent hover:text-accent-foreground text-foreground border border-border transition-colors font-medium"
              >
                HVAC Services
              </button>
              <button
                onClick={() => handleSelectOption("hvac-tab", "TAB Testing")}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-muted hover:bg-accent hover:text-accent-foreground text-foreground border border-border transition-colors font-medium"
              >
                TAB Testing
              </button>
              <button
                onClick={handleNavigateToContact}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-colors font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-card border-t border-border flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question here..."
                disabled={isTyping}
                className="flex-1 bg-background text-foreground border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder:text-muted-foreground disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-all flex-shrink-0 shadow-sm"
                aria-label="Send question"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Enlarge Modal Preview */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          >
            <div
              className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
              <img
                src={enlargedImage.src}
                alt={enlargedImage.caption}
                className="w-full max-h-[70vh] object-contain bg-black/40"
              />
              <div className="p-4 bg-card">
                <p className="text-sm font-medium text-foreground">{enlargedImage.caption}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  TAB Technical Services • Independent HVAC Testing, Adjusting & Balancing
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
