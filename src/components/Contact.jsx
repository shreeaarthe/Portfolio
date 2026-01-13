import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getContactValue = (type) => contact.find(c => c.Type === type)?.Value || '';
  const getContactLink = (type) => contact.find(c => c.Type === type)?.Link || '#';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Info</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello.</p>

            {getContactValue('Email') && (
              <div className="info-item">
                <FaEnvelope className="icon" />
                <a href={getContactLink('Email')}>{getContactValue('Email')}</a>
              </div>
            )}
            {getContactValue('Phone') && (
              <div className="info-item">
                <FaPhone className="icon" />
                <a href={getContactLink('Phone')}>{getContactValue('Phone')}</a>
              </div>
            )}
            <div className="social-links">
              {getContactLink('LinkedIn') !== '#' && <a href={getContactLink('LinkedIn')} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
              {getContactLink('GitHub') !== '#' && <a href={getContactLink('GitHub')} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact {
           padding: 4rem 0 6rem 0;
           background: linear-gradient(to top, var(--bg-color), rgba(30, 41, 59, 0.3));
        }
        .contact-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-info {
          padding: 2.5rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-info h3 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }
        .info-item a {
           color: #cbd5e1;
           transition: color 0.2s;
        }
        .info-item a:hover {
           color: var(--accent-color);
        }
        .icon {
          color: var(--accent-color);
          font-size: 1.4rem;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .social-links a {
          font-size: 1.5rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.05);
          padding: 0.8rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-links a:hover {
          color: white;
          background: var(--accent-color);
          transform: translateY(-3px);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: var(--card-bg); /* Fallback */
          backdrop-filter: blur(12px);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--card-border);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.95rem;
          color: #cbd5e1;
          font-weight: 500;
        }
        .form-group input,
        .form-group textarea {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-family: inherit;
          transition: border-color 0.3s ease, background 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.05);
        }
        .status-message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        @media (min-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr 1.5fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
