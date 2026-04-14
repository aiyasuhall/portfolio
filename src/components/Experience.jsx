export default function Experience() {
  const experiences = [
    {
      role: "Student",
      company: "Vietnamese-German University",
      time: "10/2022 - now",
      desc: "Computer Science student, actively learning and applying modern web technologies like React, Node.js, etc. in various projects and coursework."
    },
    {
      role: "Full Stack Developer Internship",
      company: "Phong Vi Co., Ltd.",
      time: "03/2025 - 09/2025",
      desc: "Over my 6-month internship, I successfully transitioned from academic programming to professional software engineering by actively engaging in Agile workflows and stringent Code Reviews. I spearheaded the end-to-end development of GreenSource, taking full ownership of both the system architecture and dynamic business logic. This role solidified my ability to bridge the gap between complex operational needs and technical execution, ultimately delivering a secure, scalable, and high-performance full-stack solution."
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
    },
    {
      role: "Attending Hackathon",
      company: "RMIT University",
      time: "10/2025"
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
