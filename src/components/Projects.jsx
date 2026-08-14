import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Student Placement Preparation Portal",
    description:
      "A comprehensive platform helping students prepare for placements through interview resources, aptitude materials, company-specific preparation guides, and alumni experiences.",
    tech: ["Django", "Python", "SQLite", "HTML", "CSS"],
    github: "https://github.com/ayeshasiddiqa04",
    features: [
      "Placement Resources",
      "Interview Materials",
      "Company Preparation",
      "Student Dashboard",
    ],
    emoji: "🎓",
  },
  {
    title: "AI Health Companion",
    description:
      "An AI-powered healthcare assistant designed for rural and semi-urban communities. Features symptom analysis, health guidance, risk assessment, and emergency support.",
    tech: ["Django", "Python", "Machine Learning", "SQLite"],
    github: "https://github.com/ayeshasiddiqa04",
    features: [
      "Symptom Analysis",
      "Health Guidance",
      "Voice Input",
      "Emergency Alerts",
    ],
    emoji: "🏥",
  },
  {
    title: "CarioSpectra",
    description:
      "Deep learning framework for intelligent dental caries detection using YOLOv8. Supports dental image analysis and assists in early diagnosis.",
    tech: ["YOLOv8", "PyTorch", "OpenCV", "Django"],
    github: "https://github.com/ayeshasiddiqa04",
    features: [
      "YOLOv8 Detection",
      "Computer Vision",
      "AI Diagnosis",
      "Deep Learning",
    ],
    emoji: "🦷",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Projects demonstrating expertise in software engineering,
          artificial intelligence, machine learning, computer vision,
          and full-stack web development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="
              backdrop-blur-xl
              bg-white/10
              border border-cyan-400/20
              rounded-3xl
              p-6
              shadow-[0_0_30px_rgba(34,211,238,0.08)]
              hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
              transition-all
            "
          >
            {/* Project Banner */}
            <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex flex-col items-center justify-center mb-6">

              <div className="text-6xl mb-3">
                {project.emoji}
              </div>

              <h3 className="text-xl font-bold text-center px-4">
                {project.title}
              </h3>

            </div>

            {/* Description */}
            <p className="text-gray-300 leading-7 mb-6">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6">

              <h4 className="text-cyan-400 font-semibold mb-3">
                Key Features
              </h4>

              <ul className="space-y-2 text-gray-300 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    text-sm
                    rounded-full
                    bg-cyan-500/20
                    border border-cyan-400/30
                    hover:bg-cyan-500/30
                    transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaGithub />
                GitHub
              </a>

              <button
                className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  border border-white/20
                  hover:bg-white/10
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
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