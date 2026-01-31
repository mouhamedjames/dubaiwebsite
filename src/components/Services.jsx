import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn, FaMobileAlt, FaGamepad, FaWordpress, FaRobot, FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        { icon: <FaCode />, key: 'web_dev' },
        { icon: <FaPaintBrush />, key: 'ui_ux' },
        { icon: <FaMobileAlt />, key: 'mobile_app' },
        { icon: <FaBullhorn />, key: 'digital_marketing' },
        { icon: <FaShoppingCart />, key: 'ecommerce' },
        { icon: <FaGamepad />, key: 'gaming' },
        { icon: <FaWordpress />, key: 'cms' },
        { icon: <FaRobot />, key: 'bots' },
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'var(--secondary-dark)' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}>{t('services.title')}</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0' }}>
                        {t('services.heading')}
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 215, 0, 0.1)',
                                transition: 'all 0.3s'
                            }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--accent-gold)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                color: 'var(--accent-gold)',
                                marginBottom: '1.5rem',
                                display: 'inline-block',
                                padding: '15px',
                                background: 'rgba(255, 215, 0, 0.1)',
                                borderRadius: '50%'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem' }}>{t(`services.${service.key}`)}</h3>
                            <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>{t(`services.${service.key}_desc`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
