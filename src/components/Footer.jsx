import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <footer id="contact" style={{ background: '#051020', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Company Info */}
                    <div>
                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            {isRTL ? 'شركة البرق' : 'Al-Barq'}
                        </h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            {isRTL ? 'شريكك الاستراتيجي في التحول الرقمي. نصمم المستقبل، كوداً وإبداعاً.' : 'Your strategic partner in digital transformation. We design the future, code and creativity.'}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: '#fff', fontSize: '1.2rem' }}><FaInstagram /></a>
                            <a href="#" style={{ color: '#fff', fontSize: '1.2rem' }}><FaTwitter /></a>
                            <a href="#" style={{ color: '#fff', fontSize: '1.2rem' }}><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{isRTL ? 'روابط سريعة' : 'Quick Links'}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dim)' }}>
                            <li><a href="#hero">{t('nav.home')}</a></li>
                            <li><a href="#about">{t('nav.about')}</a></li>
                            <li><a href="#services">{t('nav.services')}</a></li>
                            <li><a href="#quote">{t('nav.quote')}</a></li>
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{isRTL ? 'تجدنا هنا' : 'Find Us'}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dim)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaMapMarkerAlt style={{ color: 'var(--accent-gold)' }} />
                                <span>{isRTL ? 'دبي، أبراج بحيرات جميرا (JLT)، برج الماسة' : 'Dubai, JLT, Almas Tower'}</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaClock style={{ color: 'var(--accent-gold)' }} />
                                <span>{isRTL ? 'الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً' : 'Mon - Fri: 9:00 AM - 6:00 PM'}</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaPhoneAlt style={{ color: 'var(--accent-gold)' }} />
                                <span style={{ direction: 'ltr' }}>+971 55 123 4567</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaEnvelope style={{ color: 'var(--accent-gold)' }} />
                                <span>info@albarq.ae</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div style={{ borderRadius: '15px', overflow: 'hidden', height: '200px' }}>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28900.58988656113!2d55.1278!3d25.0744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sJumeirah%20Lake%20Towers%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>

                <div style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} {isRTL ? 'شركة البرق للتصميم والبرمجة. جميع الحقوق محفوظة.' : 'Al-Barq Design & Development. All rights reserved.'}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
