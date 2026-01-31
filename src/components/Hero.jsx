import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroScene from './3d/HeroScene';
import styles from './Hero.module.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className={styles.heroSection}>
            <div className={styles.container}>

                {/* Text Content */}
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.highlight}>{t('hero.company')}</span>
                    <h1 className={styles.title}>
                        {t('hero.title').split(' ').slice(0, -2).join(' ')} <br />
                        <span className="text-gradient">{t('hero.title').split(' ').slice(-2).join(' ')}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t('hero.subtitle')}
                    </p>

                    <div className={styles.btnGroup}>
                        <a href="#quote" className={styles.primaryBtn}>{t('hero.cta_primary')}</a>
                        <a href="#contact" className={styles.secondaryBtn}>{t('hero.cta_secondary')}</a>
                    </div>
                </motion.div>

                {/* 3D Scene */}
                <motion.div
                    className={styles.sceneContainer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <HeroScene />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
