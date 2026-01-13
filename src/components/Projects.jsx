import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass-effect"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <h3>{project.Title}</h3>
                <div className="tech-stack">
                  {project.TechStack.split(',').map((tech, i) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
                <p>{project.Description}</p>
                <div className="project-links">
                  {project.Link && (
                    <a href={project.Link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
            padding: 4rem 0;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: var(--accent-color);
        }
        .project-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-content h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #93c5fd;
          font-weight: 500;
        }
        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex: 1;
          line-height: 1.7;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-color);
          font-weight: 600;
          transition: color 0.2s;
        }
        .project-link:hover {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Projects;
