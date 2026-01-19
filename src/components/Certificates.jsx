import { motion } from 'framer-motion';

const Certificates = ({ certificates }) => {
    if (!certificates || certificates.length === 0) return null;

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Certifications & <span className="text-highlight">Credentials</span>
                    </h2>
                </div>

                <div className="certificates-flex">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-badge glass-effect"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="cert-icon">🏆</div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.Title}</h3>
                                <p className="cert-issuer">{cert.Issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
            .certificates {
                padding: 4rem 0;
            }
            .certificates-flex {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.5rem;
                max-width: 1000px;
                margin: 0 auto;
            }
            .cert-badge {
                display: flex;
                align-items: center;
                padding: 1rem 1.5rem;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                min-width: 280px;
                transition: all 0.3s ease;
            }
            .cert-badge:hover {
                background: rgba(255, 255, 255, 0.07);
                border-color: rgba(255, 255, 255, 0.1);
                transform: translateY(-3px);
            }
            .cert-icon {
                font-size: 1.5rem;
                margin-right: 1rem;
                background: rgba(255, 215, 0, 0.1);
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
            .cert-title {
                color: white;
                font-weight: 600;
                font-size: 1rem;
                margin-bottom: 0.2rem;
            }
            .cert-issuer {
                color: #94a3b8;
                font-size: 0.85rem;
            }
        `}</style>
        </section>
    );
};

export default Certificates;
