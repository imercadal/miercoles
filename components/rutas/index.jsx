import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { 
    motion, 
    useScroll,
    useTransform
} from 'framer-motion';
import Image from 'next/image';
import styles from './rutas.module.css';

const Rutas = () => {
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
    const y1 = useTransform(scrollYProgress1, [0, 1], [200, 0]);
    const y2 = useTransform(scrollYProgress1, [0, 1], [350, 0]);
    const y3 = useTransform(scrollYProgress1, [0, 1], [500, 0]);
    const y4 = useTransform(scrollYProgress1, [0, 1], [650, 0]);

    const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);
    const y5 = useTransform(scrollYProgress2, [0, 1], [200, 0]);
    const y6 = useTransform(scrollYProgress2, [0, 1], [350, 0]);
    const y7 = useTransform(scrollYProgress2, [0, 1], [500, 0]);
    const y8 = useTransform(scrollYProgress2, [0, 1], [650, 0]);


    return(
            <section className={ styles.rutasContainer }>
                <div className={ styles.titulo }>
                    <div className={styles.titulo1}>
                        <Image alt="Pin de ubicación" src='/images/pin.png' width={72} height={72}/>
                        <h1>{t('rutas.titulo')}</h1>
                    </div>
                    <h3 ref={mobileRef1}>{t('rutas.bajada_rutas')}</h3>
                </div>
                <div className={ styles.cardsContainer }>
                    <div ref={desktopRef2} className={styles.cardsRow}>
                        <motion.div style={ {opacity: opacity1, y: y1 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <Image id={styles.pin} alt="Comunidades" src='/images/comunidades.png' layout='responsive' width={16} height={9}></Image>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/854231656?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Comunidades">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>Comunidades</h4>
                                <p>{t('rutas.comunidades')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y2 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Transformación Digital" src='/images/transformacion_dig.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/858518762?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Transformación digital">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.transformacion-titulo')}</h4>
                                <p>{t('rutas.transformacion-texto')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y3 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Sustentabilidad" src='/images/sustentabilidad.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/849528911?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Sustentabilidad">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.sustentabilidad-titulo')}</h4>
                                <p>{t('rutas.sustentabilidad-texto')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity1, y: y4 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Innovación" src='/images/innovacion.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/851514063?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Innovación">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.innovacion-titulo')}</h4>
                                <p ref={mobileRef2}>{t('rutas.innovacion-texto')}</p>
                            </div>
                        </motion.div>
                    </div>
                    <div ref={desktopRef2} className={styles.cardsRow}>
                        <motion.div style={ {opacity: opacity2, y: y5 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Clientes" src='/images/la_magia_delservir.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/847129186?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Clientes">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>Clientes</h4>
                                <p>{t('rutas.clientes')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y6 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Tecnología" src='/images/tecnologia.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/860383265?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Tecnología">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.tech-titulo')}</h4>
                                <p>{t('rutas.tech-texto')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y7 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Empresa Multicategoría" src='/images/emp_multicategoria.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/862689801?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Multicategoría">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.multi-titulo')}</h4>
                                <p>{t('rutas.multi-texto')}</p>
                            </div>
                        </motion.div>
                        <motion.div style={ {opacity: opacity2, y: y8 }} className={ styles.card }>
                            <div className={ styles.imagenes }>
                                <img alt="Talento y desarrollo" src='/images/talentoydesarrollo.png' layout='responsive' width={16} height={9}></img>
                                <div>
                                    <iframe
                                        src="https://player.vimeo.com/video/864963914?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="Talento y desarrollo">
                                    </iframe>
                                </div>
                            </div>
                            <div className={ styles.cardText }>
                                <h4>{t('rutas.talento-titulo')}</h4>
                                <p>{t('rutas.talento-texto')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
    );
};

export default Rutas;

