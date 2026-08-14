import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">

      <div className="
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        rounded-full
        px-8
        py-4
        flex
        items-center
        justify-between
        shadow-[0_0_30px_rgba(34,211,238,0.08)]
      ">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="
            w-10 h-10
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            flex
            items-center
            justify-center
          ">
            <FaCode />
          </div>

          <div>
            <h1 className="font-bold text-cyan-400 text-lg">
              Ayesha Siddiqa
            </h1>

            <p className="text-xs text-gray-400">
              Software Engineer
            </p>
          </div>

        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About Me
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#journey"
            className="hover:text-cyan-400 transition duration-300"
          >
            Journey
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/ayeshasiddiqa04"
            target="_blank"
            rel="noreferrer"
            className="
              text-xl
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ayesha-siddiqa-70635b340/"
            target="_blank"
            rel="noreferrer"
            className="
              text-xl
              hover:text-cyan-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </nav>
  );
}