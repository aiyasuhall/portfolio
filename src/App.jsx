import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import './App.css';

const personalInfo = {
  name: "Ta Le Khoi Vi",
  title: "Software Engineer",
  bio: "The best way to predict the future is to create it. Focus on what you can build today, and the future will take care of itself.",
  location: "Hồ Chí Minh, Việt Nam",
  phone: "0778010707",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=khoivi@gmail.com",
  linkedin: "https://www.linkedin.com/in/v%C4%A9-t%E1%BA%A1-969a723a2/",
  github: "https://github.com/aiyasuhall"
};

function AnimatedPage({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return children;
}

function Home() {
  return (
    <div className="section home-section">
      <div className="reveal" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Header personalInfo={personalInfo} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <AnimatedPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="reveal" style={{ width: '100%' }}><About personalInfo={personalInfo} /></div>} />
          <Route path="/experience" element={<div className="reveal" style={{ width: '100%' }}><Experience /></div>} />
          <Route path="/education" element={<div className="reveal" style={{ width: '100%' }}><Education /></div>} />
          <Route path="/projects" element={<div className="reveal" style={{ width: '100%' }}><Projects /></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatedPage>
    </div>
  );
}

export default App;
