import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    // Ensure dir on mount
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const navLinks = [
        { name: t('nav.home'), href: '#hero' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.faq'), href: '#faq' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? 'glass' : ''}`}>
                <div className={`container ${styles.navContainer}`}>

                    <div className={styles.logo}>
                        <FaBolt className={styles.logoIcon} />
                        <span className="text-gradient">Al-Barq</span>
                    </div>

                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={toggleLanguage} style={{ background: 'none', cursor: 'pointer', color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '5px', border: '1px solid rgba(255,255,255,0.2)', padding: '5px 10px', borderRadius: '20px' }}>
                            <FaGlobe /> {i18n.language === 'ar' ? 'English' : 'عربي'}
                        </button>
                        <a href="#quote" className={styles.ctaBtn}>
                            {t('nav.quote')}
                        </a>
                    </div>

                    <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <button onClick={() => { toggleLanguage(); setIsOpen(false); }} style={{ background: 'none', cursor: 'pointer', color: '#fff', fontSize: '1.2rem', margin: '1rem 0', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <FaGlobe /> {i18n.language === 'ar' ? 'Switch to English' : 'تغيير للعربية'}
                </button>
                <a
                    href="#quote"
                    className={styles.ctaBtn}
                    style={{ display: 'block', marginTop: '20px' }}
                    onClick={() => setIsOpen(false)}
                >
                    {t('nav.quote')}
                </a>
            </div>
        </>
    );
};

export default Navbar;
