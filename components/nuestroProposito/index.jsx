import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-modal';
import { 
    motion, 
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion';
import styles from './nuestroProposito.module.css';
import Image from 'next/image';

const NuestroProposito = () => {
    const { t } = useTranslation('common');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    
    const buttonVariants = {
        initial: {
                scale: 1,
                boxShadow: "none",
        },
        hover: {
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
        }
    };

    const targetRefMain = useRef(null);
    const { scrollYProgress: scrollYProgress1 } = useScroll({ 
        target: targetRefMain,
        offset: isMobile ? ["start end", "end 25%"] : ["50% end", "center"] 
    });

    const targetRefCamion = useRef(null);
    const { scrollYProgress: scrollYProgress2 } = useScroll({ 
        target: targetRefCamion,
        offset: ["50% end", "center"]
    });

    useMotionValueEvent(scrollYProgress1, "change",
        (latest) => {
            console.log(latest)
    });

    const opacity1 = useTransform(scrollYProgress1, [0, 1], [0, 1]);
    const opacity2 = useTransform(scrollYProgress2, [0, 1], [0, 1]);

    const x1 = useTransform(scrollYProgress1, [0, 1], isMobile ? [-150, 0] : [230, 0]);
    const x2 = useTransform(scrollYProgress1, [0, 1], isMobile ? [150, 0] : [-230, 0]);
    const x3 = useTransform(scrollYProgress2, [0, 1], [0, 350]);
    const y = useTransform(scrollYProgress1, [0, 1], [300, 0]);

    return(
            <div className={ styles.nuestroProposito}>
                    <svg className={ styles.curvaMovil } xmlns="http://www.w3.org/2000/svg" width="100%" height="50" viewBox="0 0 375 50" preserveAspectRatio="none" fill="none">
                        <path d="M321.214 -0.00243241L377.5 -0.00242949L377.5 762.997L220.281 706.61C141.464 678.342 53.3782 700.637 -2.49999 762.998L-2.15564 -0.00239571L53.6378 0.567212C72.2558 0.757286 90.4656 6.40133 105.946 16.746C154.885 49.448 218.923 49.3828 267.676 16.4045C283.483 5.71197 302.13 -0.00243482 321.214 -0.00243241Z" fill="#E41E1E"/>
                    </svg>
                    <svg className={ styles.curvaWeb } xmlns="http://www.w3.org/2000/svg" width="100%" height="122" viewBox="0 0 1366 122" preserveAspectRatio='none' fill="none">
                        <path d="M12.9602 0.663617L-3 0.663617L-3.00009 2216.16C432.842 2026.16 931.566 2025.23 1367 2216.16L1366 0.663633L790.03 2.84683C735.544 3.05336 682.323 19.3223 637.032 49.6128C495.067 144.559 309.715 144.046 168.29 48.2987C122.436 17.2555 68.3334 0.663617 12.9602 0.663617Z" fill="#E41E1E"/>
                    </svg>
                    <div className={ styles.seccionRoja }>
                        <div className={styles.web}>
                            <motion.h2 ref={targetRefMain} className={styles.ladoIzquierdo} style={{ x: x1 }}>{t('nuestroProposito.nuestro')}</motion.h2>
                            <div className={ styles.centro }>
                                <motion.div style={{ opacity: opacity1, y }}>
                                    <Image 
                                        alt="Grupo sonriente" 
                                        src='/images/grupo.jpg'   
                                        width={654}
                                        height={800}
                                        id={styles.grupoSonriendo}
                                    />
                                </motion.div>
                                <motion.svg 
                                    style={{ opacity: opacity1, y }} 
                                    onClick={ openModal }
                                    variants={ buttonVariants }
                                    initial="initial" 
                                    whileHover="hover"
                                    xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M36.5002 72.5524C56.3211 72.5524 72.3891 56.4844 72.3891 36.6635C72.3891 16.8427 56.3211 0.774658 36.5002 0.774658C16.6793 0.774658 0.611328 16.8427 0.611328 36.6635C0.611328 56.4844 16.6793 72.5524 36.5002 72.5524ZM30.7661 26.2573L45.888 34.7843V34.7758C46.3072 35.0121 46.6553 35.3519 46.8973 35.7612C47.1393 36.1704 47.2667 36.6347 47.2667 37.1072C47.2667 37.5798 47.1393 38.044 46.8973 38.4532C46.6553 38.8625 46.3072 39.2023 45.888 39.4386L30.7661 47.9624C30.3476 48.2004 29.8721 48.3264 29.3878 48.3275C28.9035 48.3285 28.4274 48.2048 28.0078 47.9686C27.5881 47.7325 27.2398 47.3924 26.998 46.9826C26.7561 46.5729 26.6294 46.1081 26.6306 45.6352V28.5845C26.6314 28.1123 26.7594 27.6487 27.0017 27.2401C27.244 26.8315 27.5921 26.4924 28.011 26.2566C28.43 26.0208 28.9051 25.8968 29.3887 25.8969C29.8722 25.897 30.3473 26.0213 30.7661 26.2573Z" fill="white"/>
                                </motion.svg>
                            </div>
                            <motion.h2 className={styles.ladoDerecho} style={{ x: x2 }}>propósito</motion.h2>
                        </div>
                        <div className={ styles.imagenMovil }>
                            <motion.div style={{ opacity: opacity1, y }}>
                                <Image 
                                    alt="Grupo sonriente" 
                                    src='/images/grupo.jpg'   
                                    layout="responsive"
                                    width={16}
                                    height={9}
                                />
                            </motion.div>
                            <motion.svg 
                                style={{ opacity: opacity1, y }} 
                                onClick={ openModal }
                                variants={ buttonVariants }
                                initial="initial" 
                                whileHover="hover"
                                xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M36.5002 72.5524C56.3211 72.5524 72.3891 56.4844 72.3891 36.6635C72.3891 16.8427 56.3211 0.774658 36.5002 0.774658C16.6793 0.774658 0.611328 16.8427 0.611328 36.6635C0.611328 56.4844 16.6793 72.5524 36.5002 72.5524ZM30.7661 26.2573L45.888 34.7843V34.7758C46.3072 35.0121 46.6553 35.3519 46.8973 35.7612C47.1393 36.1704 47.2667 36.6347 47.2667 37.1072C47.2667 37.5798 47.1393 38.044 46.8973 38.4532C46.6553 38.8625 46.3072 39.2023 45.888 39.4386L30.7661 47.9624C30.3476 48.2004 29.8721 48.3264 29.3878 48.3275C28.9035 48.3285 28.4274 48.2048 28.0078 47.9686C27.5881 47.7325 27.2398 47.3924 26.998 46.9826C26.7561 46.5729 26.6294 46.1081 26.6306 45.6352V28.5845C26.6314 28.1123 26.7594 27.6487 27.0017 27.2401C27.244 26.8315 27.5921 26.4924 28.011 26.2566C28.43 26.0208 28.9051 25.8968 29.3887 25.8969C29.8722 25.897 30.3473 26.0213 30.7661 26.2573Z" fill="white"/>
                            </motion.svg>
                        </div>
                    
                        <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        className={styles.modal}
                        overlayClassName={styles.overlay}>
                        <div className={styles.modalContent}>
                            <iframe src="https://player.vimeo.com/video/847168548?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
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
                    <div className={ styles.extra }>
                        <motion.div 
                            ref={targetRefCamion}
                            style={{ opacity: opacity2, x: x3 }}
                            className={ styles.camion } 
                        >
                            <Image 
                                alt='Camión Coca-Cola' 
                                src='/images/camion.png'   
                                width={600}
                                height={360}
                            />
                        </motion.div>
                    </div>
            </div>
    );
};

export default NuestroProposito;
