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
          <p>Hi, my name is Khoi Vi, a 4th-year Computer Science student at Vietnamese-German University and an aspiring Software Developer. I love turning tricky problems into clean, user-friendly code! My skillset blends strict logic from C/C++ and Python with a passion for building beautiful interfaces using React.</p>
          <p>I always code with the user in mind—ensuring everything works perfectly under the hood while delivering a seamless experience. During a 6-month study program in Bonn, Germany, I gained valuable international exposure that leveled up both my technical expertise and cross-cultural teamwork. Right now, I'm focused on mastering the React & Node.js ecosystem, always eager to build projects that make a real impact.</p>
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
          <h3 className="about-subtitle" style={{ marginTop: '40px' }}>Languages</h3>
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