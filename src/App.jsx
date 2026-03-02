import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css'; 

function App() {
  // JAVASCRIPT ĐÁNH THỨC ANIMATION CUỘN
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 }); 

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Thông tin cá nhân
  const personalInfo = {
    name: "Ta Le Khoi Vi",
    title: "Software Developer",
    bio: "The best way to predict the future is to create it. Focus on what you can build today, and the future will take care of itself.",
    location: "Hồ Chí Minh, Việt Nam",
    phone: "0778010707",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=khoivi@gmail.com",
    // Đảm bảo link của bạn đúng nhé
    linkedin: "https://www.linkedin.com/in/v%C4%A9-t%E1%BA%A1-969a723a2/",
    github: "https://github.com/aiyasuhall"
  };

  return (
    // Không còn điều kiện dark-mode nữa, mặc định là giao diện hiện tại
    <div className="app-wrapper">
      
      <Navbar />
      
      <div id="home" className="section home-section">
        {/* Thêm style flex center để căn giữa header split */}
        <div className="reveal" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Header personalInfo={personalInfo} />
        </div>
      </div>
      
      <About personalInfo={personalInfo} />
      <Experience />
      
      <div className="reveal" style={{width: '100%'}}>
        <Projects />
      </div>
    </div>
  );
}

export default App;