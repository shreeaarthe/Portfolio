import { motion } from 'framer-motion';

const Hero = ({ details }) => {
  const getDetail = (key) => details.find(d => d.Key === key)?.Value || '';

  const name = getDetail('Name');
  const title = getDetail('Title');
  const bio = getDetail('Bio');

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability-badge">
            <span className="sparkle">✨</span> Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-name">{name}</span>
          </h1>

          <h2 className="hero-subtitle">
            {title.split('|')[0]} <span className="glass-dot"></span> {title.split('|')[1] || 'GenAI Specialist'}
          </h2>

          <p className="bio">
            I build intelligent systems and scalable AI applications. Specializing in <span className="text-highlight">RAG pipelines</span>, <span className="text-highlight">LangChain agents</span>, and <span className="text-highlight">production ML systems</span>.
          </p>

          <div className="location-tag">
            <span className="icon">📍</span> Bengaluru, India
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
        }
        .hero-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .hero-content {
           max-width: 900px;
           margin: 0 auto;
           display: flex;
           flex-direction: column;
           align-items: center;
        }
        .availability-badge {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #60a5fa;
          padding: 0.5rem 1.2rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .highlight-name {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        .glass-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          display: inline-block;
        }
        .bio {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 700px;
          line-height: 1.8;
        }
        .text-highlight {
          color: #a855f7; /* Purple accent for keywords */
          font-weight: 600;
        }
        .location-tag {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          color: white;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5);
        }
        .btn-outline {
          background: transparent;
          border: 1px solid var(--card-border);
          color: white;
        }
        .btn-outline:hover {
          border-color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 6rem;
          }
          .hero-subtitle {
            font-size: 2.5rem;
          }
        }
        @media (max-width: 768px) {
           .hero-title {
            font-size: 3rem;
           }
           .hero-subtitle {
             font-size: 1.5rem;
             display: flex;
             flex-direction: column;
             gap: 0.5rem;
           }
           .glass-dot { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
