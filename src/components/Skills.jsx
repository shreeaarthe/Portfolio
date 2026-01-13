import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  // Extract categories from data
  const categories = ["All Skills", ...skills.map(s => s.Category)];

  // Helper to get random progress for UI demo purposes (since CSV doesn't have it)
  const getProgress = (name) => {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return 75 + (hash % 25); // Random between 75-100
  };

  const filteredSkills = activeCategory === "All Skills"
    ? skills
    : skills.filter(s => s.Category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-skill">Technical Skills</span>
          <h2 className="section-title">
            My Tech <span className="text-highlight">Arsenal</span>
          </h2>
        </div>

        <div className="skill-filters">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((category, catIndex) => (
            category.Skills.split(',').map((skillName, index) => {
              const trimmedName = skillName.trim();
              const progress = getProgress(trimmedName);
              // Use unique key combining category and index to avoid collisions
              return (
                <motion.div
                  key={`${category.Category}-${index}`}
                  className="skill-card glass-effect"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="skill-info">
                    <h3>{trimmedName}</h3>
                    <span className="percentage">{progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })
          ))}
        </div>
      </div>

      <style>{`
        .skills {
           padding: 6rem 0;
           position: relative;
        }
        .section-header {
           text-align: center;
           margin-bottom: 3rem;
        }
        .badge-skill {
           background: rgba(59, 130, 246, 0.1);
           color: var(--accent-color);
           padding: 0.4rem 1rem;
           border-radius: 20px;
           font-size: 0.85rem;
           font-weight: 500;
           margin-bottom: 1rem;
           display: inline-block;
        }
        .section-title {
           font-size: 3rem;
           font-weight: 700;
           margin-bottom: 2rem;
        }
        .text-highlight {
           background: linear-gradient(to right, #3b82f6, #06b6d4);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        .skill-filters {
           display: flex;
           justify-content: center;
           gap: 1rem;
           margin-bottom: 3rem;
           flex-wrap: wrap;
        }
        .filter-btn {
           background: var(--card-bg);
           border: 1px solid var(--card-border);
           color: var(--text-secondary);
           padding: 0.6rem 1.5rem;
           border-radius: 25px;
           transition: all 0.3s;
           font-size: 0.95rem;
           cursor: pointer;
        }
        .filter-btn:hover, .filter-btn.active {
           background: var(--accent-color);
           color: white;
           border-color: var(--accent-color);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-card {
           padding: 1.5rem;
           border-radius: 16px;
           transition: transform 0.3s ease;
        }
        .skill-card:hover {
           transform: translateY(-5px);
           background: rgba(30, 41, 59, 0.9);
        }
        .skill-info {
           display: flex;
           justify-content: space-between;
           margin-bottom: 1rem;
           font-weight: 600;
        }
        .percentage {
           color: var(--text-secondary);
        }
        .progress-bar-bg {
           width: 100%;
           height: 8px;
           background: rgba(255,255,255,0.05);
           border-radius: 4px;
           overflow: hidden;
        }
        .progress-bar-fill {
           height: 100%;
           background: linear-gradient(90deg, var(--accent-color), #8b5cf6);
           border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Skills;
