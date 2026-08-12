import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 flex gap-6 items-center shadow-xl">
        <h1 className="font-bold text-cyan-400 text-xl">
          Ayesha Siddiqa
        </h1>

        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>

        <a href="https://github.com/ayeshasiddiqa04" target="_blank">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/ayesha-siddiqa-70635b340/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}