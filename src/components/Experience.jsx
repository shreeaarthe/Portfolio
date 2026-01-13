import { motion } from 'framer-motion';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Where I've Made <span className="text-highlight">Impact</span>
          </h2>
        </div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content glass-effect">
                <div className="exp-header">
                  <span className="exp-badge">{exp.Duration.includes('Present') ? 'Apprenticeship' : 'Internship'}</span>
                  <span className="duration">{exp.Duration}</span>
                </div>

                <h3 className="role-title">{exp.Role}</h3>
                <div className="company-info">
                  <span className="icon">🏢</span> {exp.Company}
                </div>
                <div className="location-info">
                  <span className="icon">📍</span> Bengaluru, India
                </div>

                <div className="exp-description">
                  {exp.Description.split('. ').map((sentence, i) => (
                    sentence.trim() && (
                      <div key={i} className="exp-bullet">
                        <span className="bullet-point">›</span>
                        <p>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</p>
                      </div>
                    )
                  ))}
                </div>

                {/* Placeholder tags based on content analysis or static for UI match */}
                <div className="exp-tags">
                  {exp.Description.includes('LangChain') && <span className="exp-tag">LangChain</span>}
                  {exp.Description.includes('RAG') && <span className="exp-tag">RAG</span>}
                  {exp.Description.includes('Python') && <span className="exp-tag">Python</span>}
                  {exp.Role.includes('Data') && <span className="exp-tag">ML</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience {
            padding: 4rem 0;
        }
        .mb-16 { margin-bottom: 4rem; }
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
        }
        .text-center { text-align: center; }
        
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        /* Vertical Line */
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          height: 100%;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .timeline-node {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: var(--bg-color);
            border: 4px solid var(--accent-color);
            border-radius: 50%;
            z-index: 2;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
        }

        .timeline-content {
          width: 45%;
          padding: 2rem;
          border-radius: 16px;
          position: relative;
        }
        
        /* Alternating Layout */
        .timeline-item:nth-child(odd) .timeline-content {
            margin-right: auto; /* Left side */
            margin-left: 0; 
        }
        .timeline-item:nth-child(even) .timeline-content {
            margin-left: auto; /* Right side */
            margin-right: 0;
        }
        /* Connectors */
        .timeline-item:nth-child(odd) .timeline-content::after {
            content: '';
            position: absolute;
            right: -20px; /* Adjust based on gap */
            top: 10px;
            /* Simple connector or hidden on mobile */
        }

        .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .exp-badge {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
            padding: 0.2rem 0.8rem;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        .duration {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        .role-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: white;
        }
        .company-info {
            color: var(--accent-color);
            font-weight: 500;
            margin-bottom: 0.2rem;
        }
        .location-info {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
        }
        .exp-description {
            color: #cbd5e1;
            margin-bottom: 1.5rem;
        }
        .exp-bullet {
            display: flex;
            gap: 0.8rem;
            margin-bottom: 0.8rem;
            align-items: flex-start;
        }
        .bullet-point {
            color: var(--accent-color);
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1;
        }
        .exp-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        .exp-tag {
            background: rgba(255,255,255,0.05);
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        @media (max-width: 768px) {
            .timeline::before {
                left: 20px;
            }
            .timeline-node {
                left: 20px;
            }
            .timeline-item {
                justify-content: flex-start;
                padding-left: 50px;
            }
            .timeline-content {
                width: 100%;
                margin: 0 !important;
            }
        }
      `}</style>
    </section>
  );
};

export default Experience;
