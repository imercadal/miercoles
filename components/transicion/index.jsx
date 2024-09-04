import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { 
    motion, 
    useScroll,
    useTransform,
} from 'framer-motion';
import styles from './transicion.module.css';
import Image from 'next/image';

const Transicion = () => {
    const { t } = useTranslation('common');

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const textoRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textoRef,
        offset: ["start end", "end 95%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const x1 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [200, 0]);
    const x3 = useTransform(scrollYProgress, [0, 1], isMobile ? [-200, 0] : [100, 0]);
    const x4 = useTransform(scrollYProgress, [0, 1], isMobile ? [200, 0]: [-100, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [300, 0]);

    return(
        <section className={ styles.transicion }>
                <div ref={textoRef} className={ styles.ladoIzquierdo }>
                    <div className={ styles.titIzquierdo }>
                        <motion.h2 style={{ x: x3 }}>{t('transicion.izquierda')}</motion.h2>
                    </div>
                    <div className={ styles.nubes }>
                        <motion.div style={{ opacity, x: x1 }}>
                        <Image src='/images/nube_a.png'
                            alt='Nube'
                            width={126}
                            height={117}/>
                        </motion.div>
                        <motion.div style={{ opacity, x: x1 }}>
                        <Image src='/images/nube_b.png'
                        alt='Nube'
                        width={177}
                        height={164}/>
                        </motion.div>
                    </div>
                </div>
                <motion.div style={{ opacity, y }} className={ styles.centro }>
                    <Image
                        className={ styles.bebidaWeb } 
                        src='/images/bebida.png'
                        alt='Botella de bebida'
                        layout='responsive'
                        width={10}
                        height={20}/>
                </motion.div>
                <div className={ styles.ladoDerecho }>
                    <div className={ styles.titDerecho }>
                    <motion.h2 style={{ x: x4 }} >{t('transicion.derecha')}</motion.h2>
                    </div>
                    <div className={ styles.nubes }>
                        <motion.div style={{ opacity, x: x2 }}>
                        <Image src='/images/nube_d.png'
                            alt='Nube'
                            width={126}
                            height={117}/>
                        </motion.div>
                        <motion.div style={{ opacity, x: x2 }}>
                        <Image src='/images/nube_c.png'
                        alt='Nube'
                        width={81}
                        height={75}/>
                        </motion.div>
                    </div>
                </div>
        </section>
    );
};

export default Transicion;