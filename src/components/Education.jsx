import { motion } from 'framer-motion';

const Education = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Education
        </motion.h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-card glass-effect"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="edu-header">
                <h3>{edu.Degree}</h3>
                <span className="year">{edu.Year}</span>
              </div>
              <div className="institution-info">
                <span className="icon">🎓</span>
                <h4>{edu.Institution}</h4>
              </div>
              <p className="edu-desc">{edu.Description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education {
            padding: 4rem 0;
        }
        .text-center { text-align: center; }
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .edu-card {
          padding: 2rem;
          border-radius: 16px;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .edu-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        .edu-header h3 {
          font-size: 1.3rem;
          color: white;
          margin: 0;
          font-weight: 700;
          line-height: 1.3;
        }
        .year {
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-secondary);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }
        .institution-info {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin-bottom: 1rem;
           color: var(--text-secondary);
        }
        .institution-info h4 {
          color: var(--text-secondary);
          font-weight: 500;
          margin: 0;
        }
        .edu-desc {
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
