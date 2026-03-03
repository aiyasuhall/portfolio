import { Code2, Palette, Terminal, Database, BrainCircuit, Binary, FileCode, Atom, Globe, MessageSquare, BookOpen } from 'lucide-react';

export default function About({ personalInfo }) {
  // 1. Skill list
  const skills = [
    { name: "HTML & CSS", icon: <Code2 size={18} /> },
    { name: "JavaScript", icon: <Terminal size={18} /> },
    { name: "React", icon: <Atom size={18} /> },
    { name: "Node.js", icon: <Database size={18} /> },
    { name: "Python", icon: <FileCode size={18} /> },
    { name: "C/C++", icon: <Binary size={18} /> },
    { name: "UI/UX Design", icon: <Palette size={18} /> },
    { name: "Problem Solving", icon: <BrainCircuit size={18} /> }
  ];

  // 2. Language list
  const languages = [
    { name: "English (IELTS 6.0)", icon: <Globe size={18} /> },
    { name: "German (A2)", icon: <MessageSquare size={18} /> },
    { name: "Vietnamese (Native)", icon: <BookOpen size={18} /> }
  ];

  return (
    <div id="about" className="section about-section">
      <h2 className="reveal">About me</h2>
      <div className="about-container reveal">
        
        {/* Intro */}
        <div className="about-text">
          <h3 className="about-subtitle">Introduction</h3>
          <p>Hi, my name is Khoi Vi, a 4th-year Computer Science student at Vietnamese-German University (VGU) on a mission to become a Full-Stack Developer. For me, coding is all about connecting solid logic with a seamless user experience. I build robust foundations under the hood using C/C++, Python, and Java (OOP), in order to enhance my logical thinking and problem solving skill.. To bring those ideas to life on the screen, I rely on HTML and CSS for structure and design, while using JavaScript as my full-stack powerhouse—leveraging React for dynamic interfaces and Node.js for the backend. My goal is always to ensure the final product runs flawlessly while feeling completely natural to the user.</p>
          <p>My mindset was greatly shaped by a 6-month study abroad program in Bonn, Germany, which leveled up both my technical skills and my ability to collaborate in cross-cultural teams. Currently, I'm diving deep into the React & Node.js ecosystem, always eager to build user-friendly products that deliver real value!</p>
        </div>

        {/* Skill & language */}
        <div className="about-skills">
          
          {/* Skills */}
          <h3 className="about-subtitle">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>

          {/* Languages */}
          <h3 className="about-subtitle" style={{ marginTop: '40px' }}>Language</h3>
          <div className="skills-grid">
            {languages.map((lang, index) => (
              <div key={index} className="skill-badge">
                <span className="skill-icon">{lang.icon}</span>
                {lang.name}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
