import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import Image from 'next/image';
import styles from './viveProposito.module.css';

const ViveProposito = () => {
    const { t } = useTranslation('common');
    
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const mobileRef1 = useRef(null);
    const desktopRef1 = useRef(null);
    const targetRef1 = isMobile ? mobileRef1 : desktopRef1;

    const mobileRef2 = useRef(null);
    const desktopRef2 = useRef(null);
    const targetRef2 = isMobile ? mobileRef2 : desktopRef2;

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef1,
        offset: ["50% end", "center"]
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: ["50% end", "center"]
    });

    const opacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);
    const y1 = useTransform(scrollYProgress1, [0, 1], [150, 0]);
    const y2 = useTransform(scrollYProgress1, [0, 1], [300, 0]);
    const y3 = useTransform(scrollYProgress1, [0, 1], [450, 0]);
    const y4 = useTransform(scrollYProgress1, [0, 1], [600, 0]);

    const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
    const y5 = useTransform(scrollYProgress2, [0, 1], [150, 0]);
    const y6 = useTransform(scrollYProgress2, [0, 1], [300, 0]);
    const y7 = useTransform(scrollYProgress2, [0, 1], [450, 0]);
    const y8 = useTransform(scrollYProgress2, [0, 1], [600, 0]);

    return(
            <section className={ styles.vivePropositoContainer}>
                <div className={ styles.titulo }>
                    <div className={styles.titulo1}>
                        <Image 
                            id={ styles.mundo }
                            src='/images/mundo_200x200.png' 
                            alt="Planeta Tierra"
                            width={64}
                            height={64} 
                        />
                        <h1>{t('viveProposito.titulo')}</h1>
                    </div>
                    <h3 ref={mobileRef1}>{t('viveProposito.bajada_vivo')}</h3>
                </div>
                <div className={ styles.cardsContainer }>
                    <div ref={desktopRef2} className={styles.cardsRow}>
                        <motion.div style={ {opacity: opacity1, y: y1 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/957637334?h=fcf5fdd81b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardOne_titulo')}</h4>
                                <p>{t('viveProposito.cardOne')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y2 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/1005593130?h=c1175cee76&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardTwo_titulo')}</h4>
                                <p>{t('viveProposito.cardTwo')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y3 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/1005592327?h=7fca11688e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardThree_titulo')}</h4>
                                <p>{t('viveProposito.cardThree')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y4 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/1005593067?h=151ed40c3e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardFour_titulo')}</h4>
                                <p>{t('viveProposito.cardFour')}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div ref={desktopRef2} className={styles.cardsRow}>
                        <motion.div style={ {opacity: opacity2, y: y5 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/847129186?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardFive_titulo')}</h4>
                                <p>{t('viveProposito.cardFive')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y6 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/860383265?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('viveProposito.cardSix_titulo')}</h4>
                                <p>{t('viveProposito.cardSix')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y7 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <div>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4></h4>
                                <p></p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y8 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                            </div>
                            <div className={ styles.cardText }>
                                <h4></h4>
                                <p></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
    );
};

export default ViveProposito;