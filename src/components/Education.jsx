import { GraduationCap, Globe, Users, Trophy } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    role: "Bachelor of Computer Science",
    institution: "Vietnamese-German University (VGU)",
    time: "10/2022 – Present",
    desc: "Pursuing a Computer Science degree with a focus on software engineering, algorithms, and modern web technologies. Actively applying knowledge through projects in React, Node.js, and system design.",
    accent: "var(--primary)"
  },
  {
    icon: Globe,
    role: "Exchange Student",
    institution: "Hochschule Bonn-Rhein-Sieg, Germany",
    time: "09/2024 – 03/2025",
    desc: "Completed a 6-month Computer Science exchange program in Bonn, Germany — deepening technical expertise while developing cross-cultural collaboration skills in an international academic environment.",
    accent: "#22d3ee"
  },
  {
    icon: Users,
    role: "Member",
    institution: "VGU Alumni Association",
    time: "10/2023 – 05/2024",
    desc: "Contributed as a content writer for the VGU Alumni page and participated in workshops including AI for Images: Theories to Practices and IT: Career Exploration Day.",
    accent: "var(--secondary)"
  },
  {
    icon: Trophy,
    role: "Hackathon Participant",
    institution: "RMIT University",
    time: "10/2025",
    desc: "Selected to participate in a competitive hackathon at RMIT University, collaborating in a team to design and build a working solution under time constraints.",
    accent: "#f59e0b"
  }
];

export default function Education() {
  return (
    <div id="education" className="section education-section">
      <h2 className="reveal">Education</h2>
      <div className="edu-grid reveal">
        {educationData.map(({ icon: Icon, role, institution, time, desc, accent }, index) => (
          <div key={index} className="edu-card" style={{ '--accent': accent }}>
            <div className="edu-card-top">
              <div className="edu-icon-wrap" style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}>
                <Icon size={22} style={{ color: accent }} />
              </div>
              <span className="edu-time">{time}</span>
            </div>
            <h3 className="edu-role">{role}</h3>
            <h4 className="edu-institution">{institution}</h4>
            <p className="edu-desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
