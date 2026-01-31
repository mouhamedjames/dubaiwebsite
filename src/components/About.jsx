import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('about.title')}</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0' }}>
                        {t('about.heading')}
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-dim)', lineHeight: '1.8' }}>
                        {t('about.desc')}
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <motion.div
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '20px', textAlign: 'center' }}
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>{t('about.vision_title')}</h3>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                            {t('about.vision_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass"
                        style={{ padding: '2rem', borderRadius: '20px', textAlign: 'center' }}
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>{t('about.why_title')}</h3>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                            {t('about.why_desc')}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
