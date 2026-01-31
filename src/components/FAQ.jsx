import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Note: Usually FAQs are dynamic or fetched, but we'll try to map them or use keys.
// For simplicity in this demo, I'll stick to the existing static ones but ideally they should be in the translation file.
// Since I didn't verify adding FAQ keys to locales, I will skip i18n for the *body* of FAQs for this specific step to avoid breaking,
// OR better, I will quickly append them to the locale files in a future step or just hardcode checking language.
// Actually, let's do it properly. I'll stick to hardcoded for checking the UI, or just use the title for now.
// Given time constraints, I'll use the title translation and keep the FAQs static Arabic for now, unless I update json.
// Wait, user asked for MULTI LANGUAGE. So I really should have put them in the json.
// I will rewrite this component to use a helper that returns the list based on current language.

const FAQ = () => {
    const { t, i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data handling for bilingual FAQs
    const faqs = i18n.language === 'en' ? [
        {
            question: "How long does it take to design and develop a website?",
            answer: "It depends on complexity. Brochure sites take 10-15 days, while large stores/systems are scheduled after detailed study."
        },
        {
            question: "Are the sites SEO and mobile friendly?",
            answer: "Absolutely. We follow a Mobile-First approach and ensure code is SEO friendly for top ranking."
        },
        {
            question: "Do you provide maintenance and support?",
            answer: "Yes, we offer support packages to ensure security and updates with fast response."
        },
        {
            question: "How is the cost determined?",
            answer: "We are transparent. we study your needs first then provide a detailed quotation suitable for your budget."
        },
        {
            question: "Can I edit the site myself later?",
            answer: "Yes, we provide an easy-to-use control panel (Arabic/English) with training."
        }
    ] : [
        {
            question: 'ما هي المدة الزمنية المستغرقة لتنفيذ مشروع تصميم وتطوير موقع إلكتروني؟',
            answer: 'تختلف المدة حسب حجم التعقيد، ولكن في "البرق" نلتزم بجداول زمنية محددة. المواقع التعريفية عادةً ما تستغرق من 10 إلى 15 يوم عمل، بينما المتاجر والأنظمة الكبيرة يتم تحديد جدولها بعد دراسة المتطلبات بدقة.'
        },
        {
            question: 'هل المواقع التي تصممها "البرق" متوافقة مع محركات البحث (SEO) والجوال؟',
            answer: 'بكل تأكيد. جميع أعمالنا تعتمد مبدأ (Mobile-First)، كما يتم بناء الكود البرمجي وتنسيق المحتوى ليكون صديقاً لمحركات البحث (SEO Friendly) لضمان ظهور موقعك في النتائج الأولى.'
        },
        {
            question: 'هل تقدمون خدمات الصيانة والدعم الفني بعد تسليم المشروع؟',
            answer: 'نحن لا نتركك بعد التسليم. نوفر باقات دعم فني وصيانة دورية لضمان أمان الموقع وتحديثه تقنياً، مع استجابة سريعة لأي طارئ لضمان استمرارية عملك دون توقف.'
        },
        {
            question: 'كيف يتم تحديد تكلفة الخدمات (برمجة، تصميم، تسويق)؟',
            answer: 'نحن نؤمن بالشفافية؛ لذا نقوم بدراسة احتياجاتك أولاً ثم نقدم عرض سعر مفصل (Quotation) يناسب ميزانيتك وأهداف مشروعك، دون أي تكاليف مخفية.'
        },
        {
            question: 'هل يمكنني التعديل على الموقع بنفسي لاحقاً؟',
            answer: 'نعم، نقوم بتسليمك لوحة تحكم سهلة الاستخدام (باللغة العربية أو الإنجليزية) مع توفير تدريب سريع لفريقك على كيفية إضافة المحتوى وتعديله بكل بساطة.'
        }
    ];

    return (
        <section id="faq" className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('nav.faq')}</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0' }}>
                        {i18n.language === 'ar' ? 'كل ما يدور في' : 'Frequently Asked'} <span className="text-gradient">{i18n.language === 'ar' ? 'ذهنك' : 'Questions'}</span>
                    </h2>
                </motion.div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="glass"
                            style={{ marginBottom: '1.5rem', borderRadius: '15px', overflow: 'hidden' }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    textAlign: i18n.language === 'ar' ? 'right' : 'left'
                                }}
                            >
                                {i18n.language === 'en' && (
                                    <span style={{ order: 2, display: 'flex', alignItems: 'center' }}>{activeIndex === index ? <FaMinus style={{ color: 'var(--accent-gold)' }} /> : <FaPlus style={{ color: 'var(--accent-gold)' }} />}</span>
                                )}
                                {i18n.language === 'ar' && (
                                    <span style={{ order: 0, display: 'flex', alignItems: 'center' }}>{activeIndex === index ? <FaMinus style={{ color: 'var(--accent-gold)' }} /> : <FaPlus style={{ color: 'var(--accent-gold)' }} />}</span>
                                )}

                                <span style={{ flex: 1, margin: '0 10px' }}>{faq.question}</span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-dim)', lineHeight: '1.7', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: i18n.language === 'ar' ? 'right' : 'left' }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
