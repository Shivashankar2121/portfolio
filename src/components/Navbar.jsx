import { useEffect, useState } from "react";
import { Menu, X, Download, Moon, Sun } from "lucide-react";

const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Education", href: "#education" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Languages", href: "#languages" },
//   { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href);

        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08101f]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">
          Shivashankar<span className="text-white">   </span>
        </h1>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative font-medium transition duration-300 hover:text-cyan-400 ${
                active === item.name ? "text-cyan-400" : "text-white"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-2 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  active === item.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500 transition flex items-center justify-center"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-full font-semibold transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#08101f] border-t border-slate-700">
          <div className="flex flex-col py-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 hover:bg-slate-800 transition"
              >
                {item.name}
              </a>
            ))}

            <div className="px-6 pt-5 flex gap-4">
              <button
                onClick={toggleTheme}
                className="flex-1 bg-slate-800 py-3 rounded-lg"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>

              <a
                href="/resume.pdf"
                download
                className="flex-1 bg-cyan-500 text-center py-3 rounded-lg font-semibold"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;