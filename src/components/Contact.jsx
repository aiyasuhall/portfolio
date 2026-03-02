import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ personalInfo }) {
  return (
    <div id="contact" className="section contact-section">
      <h2>Liên hệ với tôi</h2>
      
      <div className="contact-details">
        <p><MapPin size={20} /> {personalInfo.location}</p>
        <p><Phone size={20} /> {personalInfo.phone}</p>
      </div>

      <div className="social-links">
        <a href={personalInfo.email} target="_blank" rel="noopener noreferrer" className="icon-link">
          <Mail size={32} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
          <Linkedin size={32} />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="icon-link">
          <Github size={32} />
        </a>
      </div>
    </div>
  );
}