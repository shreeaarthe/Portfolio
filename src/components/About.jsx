import { motion } from 'framer-motion';

const About = ({ details }) => {
  const getDetail = (key) => details.find(d => d.Key === key)?.Value || '';
  const bio = getDetail('Bio');

  const stats = [
    { value: "9.06", suffix: "/10", label: "CGPA in B.Tech" },
    // { value: "25%", label: "ML Accuracy Boost" },
    // { value: "95%", label: "OCR Pipeline Accuracy" },
    { value: "1+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-header text-center"
        >
          <h2 className="section-title">
            Turning Ideas into <span className="text-highlight">Intelligent Systems</span>
          </h2>

          <p className="about-bio">
            {bio || "I'm a Software Engineer with a passion for building intelligent systems that solve real-world problems. Currently at IQVIA, I architect dynamic RAG pipelines and develop agentic AI solutions."}
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass-effect"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-value">
                {stat.value}<span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        }
        .about-header {
          max-width: 800px;
          margin: 0 auto 4rem auto;
        }
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        .about-bio {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .stat-card {
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 180px;
        }
        .stat-value {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-suffix {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-left: 2px;
        }
        .stat-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-item {
          padding: 2rem;
          border-radius: 16px;
        }
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }
        .feature-item h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .feature-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
