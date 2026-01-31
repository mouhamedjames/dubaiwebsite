import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const QuoteForm = () => {
    const { t, i18n } = useTranslation();
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        service: 'website',
        budget: '',
        details: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const isRTL = i18n.language === 'ar';

    return (
        <section id="quote" className="section-padding" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px', background: 'var(--accent-gold)', filter: 'blur(150px)', opacity: '0.1', borderRadius: '50%', zIndex: '-1' }}></div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>

                    <motion.div
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                            {isRTL ? 'لنبدأ رحلة' : 'Let\'s Start Your'} <span className="text-gradient">{isRTL ? 'نجاحك الرقمي' : 'Digital Success'}</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)' }}>
                            {isRTL ? 'أخبرنا عن مشروعك وسنقوم بالرد عليك بعرض سعر مفصل خلال 24 ساعة.' : 'Tell us about your project and we will respond with a detailed quote within 24 hours.'}
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass"
                        style={{ padding: '3rem', borderRadius: '20px' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="success-message"
                                    style={{ textAlign: 'center', padding: '2rem' }}
                                >
                                    <FaCheckCircle style={{ fontSize: '4rem', color: '#4BB543', marginBottom: '1rem' }} />
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{isRTL ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}</h3>
                                    <p style={{ color: 'var(--text-dim)' }}>{isRTL ? 'فريق البرق سيتواصل معك خلال أقل من 24 ساعة.' : 'Al-Barq team will contact you within less than 24 hours.'}</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        style={{ marginTop: '2rem', background: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '0.5rem 1.5rem', borderRadius: '50px' }}
                                    >
                                        {isRTL ? 'إرسال طلب آخر' : 'Send Another Request'}
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: 'var(--text-light)', fontWeight: '600' }}>{isRTL ? 'الاسم الكامل / اسم الشركة' : 'Full Name / Company Name'}</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder={isRTL ? "مثال: شركة النور" : "ex: Noor Company"}
                                                onChange={handleChange}
                                                style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: 'var(--text-light)', fontWeight: '600' }}>{isRTL ? 'رقم التواصل (مع رمز الدولة)' : 'Phone Number'}</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+971 50 123 4567"
                                                onChange={handleChange}
                                                style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: 'var(--text-light)', fontWeight: '600' }}>{isRTL ? 'نوع الخدمة المطلوبة' : 'Service Type'}</label>
                                            <select
                                                name="service"
                                                onChange={handleChange}
                                                style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: '#112240', color: '#fff' }}
                                            >
                                                <option value="website">{t('services.web_dev')}</option>
                                                <option value="uiux">{t('services.ui_ux')}</option>
                                                <option value="marketing">{t('services.digital_marketing')}</option>
                                                <option value="mobile">{t('services.mobile_app')}</option>
                                                <option value="gaming">{t('services.gaming')}</option>
                                                <option value="bots">{t('services.bots')}</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: 'var(--text-light)', fontWeight: '600' }}>{isRTL ? 'الميزانية التقديرية (اختياري)' : 'Estimated Budget (Optional)'}</label>
                                            <input
                                                type="text"
                                                name="budget"
                                                placeholder={isRTL ? "مثال: 10,000 - 20,000 درهم" : "ex: 10k - 20k AED"}
                                                onChange={handleChange}
                                                style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: '#fff' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ color: 'var(--text-light)', fontWeight: '600' }}>{isRTL ? 'تفاصيل المشروع' : 'Project Details'}</label>
                                        <textarea
                                            name="details"
                                            rows="4"
                                            placeholder={isRTL ? "صف لنا فكرتك باختصار..." : "Briefly describe your idea..."}
                                            onChange={handleChange}
                                            style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', resize: 'none' }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="ctaBtn"
                                        style={{
                                            marginTop: '1rem',
                                            background: 'var(--accent-gold)',
                                            color: 'var(--primary-dark)',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            transition: 'transform 0.2s',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {isRTL ? 'إرسال الطلب' : 'Send Request'} <FaPaperPlane style={{ marginRight: '10px' }} />
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
