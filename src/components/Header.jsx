import { MapPin, Phone, Linkedin, Github, Mail } from 'lucide-react';

export default function Header({ personalInfo }) {
  return (
    <header className="header-split">
      {/* Info (60%) */}
      <div className="header-left">
        <span className="greeting">HELLO, MY NAME IS</span>
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title-gradient">{personalInfo.title}</h2>
        
        {/* 3 LOGO: LINKEDIN - GITHUB - EMAIL */}
        <div className="header-social-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="header-icon-link" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="header-icon-link" title="GitHub">
            <Github size={24} />
          </a>
          <a href={personalInfo.email} className="header-icon-link" title="Gửi Email">
            <Mail size={24} />
          </a>
        </div>

        {/* Quote */}
        <p className="bio-split">{personalInfo.bio}</p>
        
        {/* Info */}
        <div className="contact-info-split">
          <p><MapPin size={20} color="#3b82f6" /> {personalInfo.location}</p>
          <p><Phone size={20} color="#3b82f6" /> {personalInfo.phone}</p>
        </div>

      </div>

      {/* Avatar (40%) */}
      <div className="header-right">
        <div className="image-wrapper">
          <img 
            src="img/avatar.jpg" 
            alt="Avatar" 
            className="hero-image"
          />
          <div className="floating-icon icon-1">🤖</div>
          <div className="floating-icon icon-2">💻</div>
        </div>
      </div>
    </header>
  );
}