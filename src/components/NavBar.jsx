import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { to: '/', label: 'Menu' },
    { to: '/about', label: 'About me' },
    { to: '/experience', label: 'Experience' },
    { to: '/education', label: 'Education' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
