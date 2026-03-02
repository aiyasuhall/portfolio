export default function Projects() {
  const myProjects = [
    { name: "Fall Detection System", desc: "Smart assistance system for elderly people.", link: "https://github.com/aiyasuhall/Fall_Detection_System" },
    { name: "Green Source Project", desc: "Optimized tool in investing.", link: "https://github.com/aiyasuhall/GreenSource_project" },
    { name: "Running Game", desc: "A funny game with a realistic story.", link: "https://github.com/aiyasuhall/running_game" },
    { name: "Mobile Programming", desc: "A helpful tool for students stuyding new language.", link: "https://github.com/aiyasuhall/mobile_programming" }
  ];

  return (
    <div id="projects" className="section projects-section">
      <h2>Markable Projects</h2>
      <div className="project-grid">
        {myProjects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} className="btn-view">View details</a>
          </div>
        ))}
      </div>
    </div>
  );
}