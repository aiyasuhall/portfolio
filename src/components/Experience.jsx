export default function Experience() {
  const experiences = [
    {
      role: "Student",
      company: "Vietnamese-German University",
      time: "10/2022 - now",
      desc: "Computer Science student, actively learning and applying modern web technologies like React, Node.js, etc. in various projects and coursework."
    },
    {
      role: "Exchange Student",
      company: "Hochschule Bonn-Rhein-Sieg University of Applied Sciences",
      time: "09/2024 - 03/2025",
      desc: "Completed a 6-month Computer Science exchange in Bonn, Germany—sharpening my technical skills, independence, and cross-cultural communication in an international environment."
    },
    {
      role: "Member of VGU Alumni Association",
      company: "Vietnamese-German University",
      time: "10/2023 - 05/2024",
      desc: "Writing content for VGU Alumin page, joining in many workshop including AI for Images: Theories to Practices, IT: Career Exploration Day, etc."
    }
  ];

  return (
    <div id="experience" className="section experience-section">
      <h2 className="reveal">My Experience</h2>
      <div className="timeline reveal">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.role}</h3>
            <h4>{exp.company} | {exp.time}</h4>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}