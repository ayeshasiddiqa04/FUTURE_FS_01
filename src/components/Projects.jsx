import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Student Placement Preparation Portal",
    description:
      "A comprehensive platform helping students prepare for placements through interview resources, aptitude materials, company-specific preparation guides, and alumni experiences.",
    tech: ["Django", "Python", "SQLite", "HTML", "CSS"],
    github: "https://github.com/ayeshasiddiqa04",
  },
  {
    title: "AI Health Companion",
    description:
      "An AI-powered healthcare assistant designed for rural and semi-urban communities. Features symptom analysis, health guidance, risk assessment, and emergency support.",
    tech: ["Django", "Python", "Machine Learning", "SQLite"],
    github: "https://github.com/ayeshasiddiqa04",
  },
  {
    title: "CarioSpectra",
    description:
      "Deep learning framework for intelligent dental caries detection using YOLOv8. Supports dental image analysis and assists in early diagnosis.",
    tech: ["YOLOv8", "PyTorch", "OpenCV", "Django"],
    github: "https://github.com/ayeshasiddiqa04",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Projects that demonstrate my skills in full-stack development,
          artificial intelligence, machine learning, and real-world problem
          solving.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl"
          >
            <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold text-center px-4">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-500/20 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
              >
                <FaGithub />
                GitHub
              </a>

              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
                <FaExternalLinkAlt />
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}