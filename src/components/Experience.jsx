export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Internship",
      company: "Accenture Vietnam",
      time: "05/2026 - now",
      desc: [
        "Implemented authorization/ access control of an internal tool supporting for HR and leads to manage working hours and shift schedules of employees.",
        "Researched about Agentic AI concepts, focusing on multi-agent orchestration and dynamic runtime tool selection to analyze and automate enterprise-level system deployments.",
        "Designed and implemented a complete multi-agent architecture from scratch, orchestrating specialized utility agents and a dynamic routing agent capable of processing natural language feedback for iterative task revision."
      ]
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
            {Array.isArray(exp.desc)
              ? exp.desc.map((para, i) => <p key={i}>{para}</p>)
              : <p>{exp.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
