export default function Projects() {
  const myProjects = [
    { name: "Fall Detection System", desc: "Smart assistance system for elderly people.", link: "https://github.com/aiyasuhall/Fall_Detection_System" },
    { name: "Green Source Project", desc: "Optimized tool in investing.", link: "https://greensource-project.onrender.com/" },
    { name: "GrindNow", desc: "An intuitive To-Do platform empowering users to efficiently organize, track, and prioritize their daily activities.", link: "https://todo-application-y4nu.onrender.com/" },
    { name: "Talkify", desc: "A responsive real-time messaging application enabling seamless direct and group communication, powered by Socket.io, TypeScript, and secure JWT authentication.", link: "talkify-frontend-omega.vercel.app" }
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
