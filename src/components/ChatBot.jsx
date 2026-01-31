import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaComments } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ChatBot = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);
    const isRTL = i18n.language === 'ar';

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: 1,
                    text: isRTL ? 'مرحباً بك في البرق! أنا بوت المساعدة الذكي. كيف يمكنني مساعدتك اليوم؟' : 'Welcome to Al-Barq! I am your smart assistant. How can I help you today?',
                    sender: 'bot'
                }
            ]);
        }
    }, [i18n.language]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            let botResponse = isRTL
                ? 'شكراً لتواصلك معنا. سيقوم أحد مستشارينا بالرد عليك قريباً. يمكنك أيضاً استخدام نموذج "اطلب عرض سعر" لتفاصيل أكثر.'
                : 'Thank you for contacting us. One of our consultants will reply shortly. You can also use the "Get a Quote" form for more details.';

            const lowerInput = newUserMsg.text.toLowerCase();
            if (lowerInput.includes('website') || lowerInput.includes('موقع')) {
                botResponse = isRTL ? 'نقوم بتصميم مواقع احترافية. هل ترغب في معرفة الأسعار؟' : 'We design professional websites. Would you like to know the prices?';
            } else if (lowerInput.includes('app') || lowerInput.includes('تطبيق')) {
                botResponse = isRTL ? 'تطبيقات الجوال من اختصاصنا! هل لديك فكرة جاهزة؟' : 'Mobile apps are our specialty! Do you have a ready concept?';
            }

            setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '100px', // Above WhatsApp
                    right: '30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#0088ff',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0, 136, 255, 0.4)',
                    zIndex: 9998,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.5rem'
                }}
            >
                {isOpen ? <FaTimes /> : <FaComments />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        style={{
                            position: 'fixed',
                            bottom: '180px',
                            right: '30px',
                            width: '350px',
                            height: '450px',
                            backgroundColor: '#112240',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                            zIndex: 9999,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '15px', background: '#0a192f', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                                <FaRobot />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>{isRTL ? 'المساعد الذكي' : 'Smart Assistant'}</h3>
                        </div>

                        {/* Messages Area */}
                        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    style={{
                                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '80%',
                                        padding: '10px 15px',
                                        borderRadius: '15px',
                                        borderBottomRightRadius: msg.sender === 'user' ? '2px' : '15px',
                                        borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '15px',
                                        backgroundColor: msg.sender === 'user' ? '#0088ff' : 'rgba(255,255,255,0.05)',
                                        color: '#fff',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.4'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} style={{ padding: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '10px' }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Type your message...'}
                                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '25px', padding: '10px 15px', color: '#fff', outline: 'none' }}
                            />
                            <button type="submit" style={{ background: 'var(--accent-gold)', color: '#000', width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
