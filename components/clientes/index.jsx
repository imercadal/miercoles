import React, { useRef, useState  } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import styles from './clientes.module.css';
import { 
    motion, 
    useScroll,
    useTransform,
} from 'framer-motion';
import Image from 'next/image';

const Clientes = () => {
    const { t } = useTranslation('common');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start 80%"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [300, 0]);
    const y4 = useTransform(scrollYProgress, [0, 1], [400, 0]);

    const y5 = useTransform(scrollYProgress, [0, 1], [200, 0]);

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return(
        <section>
            <div className={ styles.container }>
                <div className={ styles.textoContainer }>
                    <div className={ styles.texto }>
                        <motion.h3 style={{ opacity, y: y1 }}>Clientes</motion.h3>
                        <motion.h1 ref={targetRef} style={{ opacity, y: y2 }}>{t('clientes.bajada')}</motion.h1>
                        <motion.p style={{ opacity, y: y3 }} className={ styles.peirano }>Miguel Ángel Peirano</motion.p>
                        <motion.p style={{ opacity, y: y3 }}className={ styles.peirano }>{t('clientes.gcRol')}</motion.p>
                    </div>
                    <motion.button style={{ opacity, y: y4 }} type="button" className={ styles.btn }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none" className={ styles.play }>
                            <path d="M7.75166 0.86802C3.53082 0.996835 0.132613 4.39504 0.00379918 8.61588C-0.136981 13.2107 3.65354 17.0008 8.24838 16.8605C12.4692 16.7319 15.8674 13.3337 15.9962 9.11284C16.1363 4.51776 12.3465 0.727944 7.75166 0.86802ZM5.56182 11.6047V6.12407C5.56173 5.99773 5.59493 5.8736 5.65807 5.76417C5.72121 5.65474 5.81206 5.56388 5.92148 5.50072C6.03089 5.43757 6.15502 5.40436 6.28136 5.40442C6.40769 5.40449 6.53178 5.43784 6.64113 5.50111L11.3876 8.24141C11.4969 8.30452 11.5877 8.39531 11.6508 8.50464C11.7139 8.61397 11.7472 8.73799 11.7472 8.86424C11.7472 8.99049 11.7139 9.11451 11.6508 9.22385C11.5877 9.33318 11.4969 9.42396 11.3876 9.48708L6.64113 12.2276C6.53178 12.2909 6.40769 12.3242 6.28136 12.3243C6.15502 12.3244 6.03089 12.2912 5.92148 12.228C5.81206 12.1648 5.72121 12.074 5.65807 11.9645C5.59493 11.8551 5.56173 11.731 5.56182 11.6047Z" fill="white"/>
                        </svg>
                        <p className={ styles.textoBtn } onClick={openModal}>
                            {t('clientes.boton_reproducir')}
                        </p>
                    </motion.button>
                </div>
                <motion.div style={{opacity, y: y5 }} className={ styles.video }>
                    <Image 
                        src='/images/Peirano.jpg'
                        alt='Miguel Ángel Peirano'
                        width={1000} 
                        height={1000}
                        id={styles.imgPeirano}
                    ></Image>
                </motion.div>
                <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                overlayClassName={styles.overlay}>
                <div className={styles.modalContent}>
                    <iframe src="https://player.vimeo.com/video/847129186?share=copy?autoplay=1&amp;byline=0&amp;title=0&amp;portrait=0&amp;color=e30008"
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
        </section>
    );

};

export default Clientes;