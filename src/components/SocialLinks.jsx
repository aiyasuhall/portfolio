import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function SocialLinks({ personalInfo }) {
  return (
    <div className="social-links">
      <a href={personalInfo.email} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Email">
        <Mail size={32} />
      </a>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
        <Linkedin size={32} />
      </a>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
        <Github size={32} />
      </a>
    </div>
  );
}

export default SocialLinks;