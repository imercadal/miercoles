import React, { useRef , useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
    const { t } = useTranslation('common');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const mobileRef = useRef(null);
    const desktopRef = useRef(null);

    const targetRef = isMobile ? mobileRef : desktopRef;
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["center", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        });

        const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

        const y1 = useTransform(scrollYProgress, [0, 1], [0, -800]);

        const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
        const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

        const y4 = useTransform(scrollYProgress, [0, 1], [0, 500]);
        const x1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
        const x2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return(

        <section className={ styles.heroContainer }>
                <div className={ styles.box }>
                <svg ref={mobileRef} xmlns="http://www.w3.org/2000/svg" className={ styles.curvaMovil } height="100" viewBox="0 0 375 50" fill="none" preserveAspectRatio='none'>
                    <path d="M321.214 9.0002e-06L377.5 1.19209e-05L377.5 763L220.281 706.612C141.464 678.344 53.3782 700.639 -2.49999 763L-2.15564 4.5692e-05L53.6378 0.569653C72.2558 0.759727 90.4656 6.40377 105.946 16.7484C154.885 49.4505 218.923 49.3852 267.676 16.407C283.483 5.71441 302.13 6.58906e-06 321.214 9.0002e-06Z" fill="#FAFAFA"/>
                </svg>
                    <div className={ styles.text }>
                        <motion.h3 style={{ opacity, y: y1 }}>Propósito Andina</motion.h3>
                        <motion.h1 style={{ opacity, y: y2 }} className={ styles.llegarjuntosacontainer }>
                            {t('hero.bajada_hero')}
                        </motion.h1>
                        <motion.div style={{ opacity, y: y3 }} className={ styles.buttonprimarydefault }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.75166 0.00376254C3.53082 0.132577 0.132613 3.53079 0.00379918 7.75162C-0.136981 12.3465 3.65354 16.1365 8.24838 15.9962C12.4692 15.8676 15.8674 12.4694 15.9962 8.24858C16.1363 3.6535 12.3465 -0.136314 7.75166 0.00376254ZM5.56182 10.7404V5.25981C5.56173 5.13347 5.59493 5.00934 5.65807 4.89991C5.72121 4.79048 5.81206 4.69962 5.92148 4.63647C6.03089 4.57331 6.15502 4.5401 6.28136 4.54017C6.40769 4.54023 6.53178 4.57358 6.64113 4.63685L11.3876 7.37715C11.4969 7.44026 11.5877 7.53105 11.6508 7.64038C11.7139 7.74971 11.7472 7.87374 11.7472 7.99998C11.7472 8.12623 11.7139 8.25026 11.6508 8.35959C11.5877 8.46892 11.4969 8.55971 11.3876 8.62282L6.64113 11.3634C6.53178 11.4266 6.40769 11.46 6.28136 11.46C6.15502 11.4601 6.03089 11.4269 5.92148 11.3637C5.81206 11.3006 5.72121 11.2097 5.65807 11.1003C5.59493 10.9909 5.56173 10.8667 5.56182 10.7404Z" fill="white"/>
                            </svg>
                            <b ref={desktopRef} className={ styles.reproducirvideo } onClick={openModal}>{t('hero.boton_reproducir')}</b>
                        </motion.div>

                        
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            className={styles.modal}
                            overlayClassName={styles.overlay}>
                            <div className={styles.modalContent}>
                                <iframe src="https://player.vimeo.com/video/851514063?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
                                    width="100%" 
                                    height="100%" 
                                    allow="autoplay" 
                                    allowFullScreen
                                    className={styles.iframe}
                                    title="Vimeo Video"></iframe>
                                <button onClick={closeModal} className={styles.closeButton}>
                                    <p>Cerrar</p>
                                    <div className={styles.circulo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height='12' width='12' viewBox="0 0 14 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 2.20711C14.0976 1.81658 14.0976 1.18342 13.7071 0.792893C13.3166 0.402369 12.6834 0.402369 12.2929 0.792893L7 6.08579L1.70711 0.792893C1.31658 0.402369 0.683417 0.402369 0.292893 0.792893C-0.0976311 1.18342 -0.0976311 1.81658 0.292893 2.20711L5.58579 7.5L0.292893 12.7929C-0.0976311 13.1834 -0.0976311 13.8166 0.292893 14.2071C0.683417 14.5976 1.31658 14.5976 1.70711 14.2071L7 8.91421L12.2929 14.2071C12.6834 14.5976 13.3166 14.5976 13.7071 14.2071C14.0976 13.8166 14.0976 13.1834 13.7071 12.7929L8.41421 7.5L13.7071 2.20711Z" fill="#0E3E61"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </Modal>
                    </div>

                    <div className={ styles.composicion }>
                        <motion.div className={styles.imgContainer} id={styles.camion} style={{ opacity, y: y4 }}>
                            <Image
                                className={styles.images} 
                                id={styles.camion} 
                                alt="Camión" 
                                src='/images/banner1.png'   
                                width={3000}
                                height={3000}
                                quality={95}
                            />
                        </motion.div>
                        <motion.div id={styles.pin} className={styles.imgContainer} style={{ opacity, y: y1 }}>
                            <Image 
                                className={styles.images}  
                                alt="Pin de ubicación" 
                                src='/images/banner2.png'
                                width={600}
                                height={600}
                            ></Image>
                        </motion.div>
                        <motion.div id={styles.nube1} className={styles.imgContainer} style={{ opacity, x: x1 }}>
                            <Image
                                alt="Nube" 
                                src='/images/banner3.png'
                                width={772}
                                height={772}
                                quality={85}
                            ></Image>
                        </motion.div>
                        <motion.div id={styles.nube2} className={styles.imgContainer} style={{ opacity, x: x2 }}>
                            <Image 
                                alt="Nube" 
                                src='/images/banner4.png'
                                width={772}
                                height={772}
                                quality={85}
                            ></Image>
                        </motion.div>
                        <motion.div id={styles.nube3} className={styles.imgContainer} style={{ opacity, y: y2 }}>
                            <Image
                                alt="Nube" 
                                src='/images/banner5.png'
                                width={772}
                                height={772}
                                quality={85}
                            ></Image>
                        </motion.div>
                    </div>
                </div>
                <svg className={ styles.curvaDesktop } xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1366 121" preserveAspectRatio='none' fill="none">
                        <path d="M1355.02 0.00010313L1367 0.00010313L1367 2215.5C931.328 2024.6 435.672 2024.6 7.16148e-05 2215.5L1 0.00011942L577.403 2.18336C631.924 2.38987 685.18 18.6597 730.51 48.9539C872.592 143.909 1058.04 143.396 1199.58 47.6398C1245.47 16.5927 1299.61 0.00010313 1355.02 0.00010313Z" fill="#FAFAFA"/>
                </svg>
        </section>

    );
};

export default Hero;