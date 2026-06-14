export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Internship",
      company: "Accenture Vietnam",
      time: "05/2026 - now",
      desc: [
        "Cooperated with team to build a tool that detects discrepancies between employees' reported overtime/plans and their people lead's plan. I have built a template for the tool, with team's consultant, and use Dataverse to store data and Power Automate to automate the workflow. The tool is expected to help HR teams streamline their processes.",
        "Exploring AI — studying how large language models reason and how agentic systems are architected, with the goal of integrating intelligent capabilities into future products."
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
