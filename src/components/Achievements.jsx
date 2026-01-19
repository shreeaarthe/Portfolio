import { motion } from 'framer-motion';

const Achievements = ({ achievements }) => {
    if (!achievements || achievements.length === 0) return null;

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Research & <span className="text-highlight">Achievements</span>
                    </h2>
                </div>

                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card glass-effect"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-header">
                                <span className="date-badge">{item.Date}</span>
                            </div>
                            <h3 className="card-title">{item.Title}</h3>
                            <p className="card-description">{item.Description}</p>
                            {item.Link && item.Link !== 'Link' && (
                                <a href={item.Link} target="_blank" rel="noopener noreferrer" className="card-link">
                                    View Publication →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .achievements {
            padding: 4rem 0;
            background: linear-gradient(to bottom, transparent, rgba(30, 41, 59, 0.3));
        }
        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        .achievement-card {
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            background: rgba(255, 255, 255, 0.03);
            transition: transform 0.3s ease;
        }
        .achievement-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
        }
        .card-header {
            margin-bottom: 1rem;
        }
        .date-badge {
            background: rgba(59, 130, 246, 0.15);
            color: #60a5fa;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        .card-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            line-height: 1.4;
        }
        .card-description {
            color: #94a3b8;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        .card-link {
            display: inline-block;
            color: var(--accent-color);
            font-weight: 500;
            font-size: 0.9rem;
            text-decoration: none;
            transition: color 0.2s;
        }
        .card-link:hover {
            text-decoration: underline;
        }
      `}</style>
        </section>
    );
};

export default Achievements;
