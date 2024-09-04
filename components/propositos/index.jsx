import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import styles from './propositos.module.css';
import Image from 'next/image';

const Propositos = () => {
    const { t } = useTranslation('common');

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center"]
    });

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        });

        const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
        const y1 = useTransform(scrollYProgress, [0, 1], [200, 0]);
        const y2 = useTransform(scrollYProgress, [0, 1], [350, 0]);
        const y3 = useTransform(scrollYProgress, [0, 1], [500, 0]);

    return(
        <section className={ styles.container }>
            <h2 className={ styles.titproposito }>{t('propositos.creando_titulo')}</h2>
            <div ref={targetRef} className={ styles.cardcontainer }>
                <motion.div style={{ opacity }} className={ styles.card }>
                    <div className={ styles.imagenes1 }>
                        <Image 
                            alt="Almacén" 
                            src='/images/almacen.png'
                            width={191}
                            height={134}/>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardOne_titulo')}</h3>
                        <p>{t('propositos.cardOne_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity, y: y1 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes2 }>
                        <Image 
                            alt="Fábrica" 
                            src='/images/fabrica.png'
                            width={196}
                            height={167}
                        ></Image>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardTwo_titulo')}</h3>
                        <p>{t('propositos.cardTwo_texto')}</p>
                    </div>
                </motion.div>
                <motion.div 
                    style={ {opacity, y: y2 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes3 }>
                    <Image 
                        alt="Banderas" 
                        src='/images/cardbanderas.png'
                        width={274}
                        height={167}/>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardThree_titulo')}</h3>
                        <p>{t('propositos.cardThree_texto')}</p>
                    </div>
                </motion.div>
                <motion.div
                    style={ {opacity, y: y3 }}
                    className={ styles.card }
                >
                    <div className={ styles.imagenes4 }>
                        <Image 
                            alt="Planeta" 
                            src='/images/planeta.png'
                            width={164}
                            height={143}/>
                    </div>
                    <div className={ styles.cardcontent }>
                        <h3>{t('propositos.cardFour_titulo')}</h3>
                        <p>{t('propositos.cardFour_texto')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Propositos;