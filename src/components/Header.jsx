import { useEffect, useState } from 'react';
import { MapPin, Phone, Linkedin, Github, Mail } from 'lucide-react';

const TITLES = ['Software Engineer', 'Full Stack Developer', 'AI Engineer'];
const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypingEffect() {
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(pause);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, titleIndex]);

  return displayed;
}

export default function Header({ personalInfo }) {
  const typedTitle = useTypingEffect();

  return (
    <header className="header-split">
      <div className="header-left">
        <span className="greeting">HELLO, MY NAME IS</span>
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title-gradient">
          {typedTitle}
          <span className="typing-cursor">|</span>
        </h2>

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

        <p className="bio-split">{personalInfo.bio}</p>

        <div className="contact-info-split">
          <p><MapPin size={20} color="#3b82f6" /> {personalInfo.location}</p>
          <p><Phone size={20} color="#3b82f6" /> {personalInfo.phone}</p>
        </div>
      </div>

      <div className="header-right">
        <div className="image-wrapper">
          <img src="img/avatar.jpg" alt="Avatar" className="hero-image" />
          <div className="floating-icon icon-1">🤖</div>
          <div className="floating-icon icon-2">💻</div>
        </div>
      </div>
    </header>
  );
}
