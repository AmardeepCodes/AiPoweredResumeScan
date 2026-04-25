import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "block px-4 py-2 rounded-lg hover:bg-[#1f2937] transition";

  const activeClass = "bg-[#1f2937]";

  return (
    <div className="h-full bg-[#020617] p-4">
      <h2 className="text-xl font-bold mb-6">JustCareer</h2>

      <nav className="space-y-2">
        <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/analyze" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          Analyze Resume
        </NavLink>

        <NavLink to="/job-match" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          Job Match
        </NavLink>

        <NavLink to="/results" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
          Results
        </NavLink>
      </nav>
    </div>
  );
}