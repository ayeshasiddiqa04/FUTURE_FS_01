import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-5xl text-center"
      >

        <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ayesha Siddiqa
        </h1>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          repeat={Infinity}
          className="text-3xl text-cyan-300 mt-6"
        />

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
  Building intelligent software solutions, AI-powered applications,
  and impactful digital experiences through modern technologies.
</p>
<p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
  Building intelligent software solutions, AI-powered applications,
  and impactful digital experiences through modern technologies.
</p>

<div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400">
  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
  Available for Internships
</div>

        <div className="flex justify-center gap-4 mt-8">
          <a href="https://github.com/ayeshasiddiqa04" target="_blank" className="bg-cyan-500 px-6 py-3 rounded-xl">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/ayesha-siddiqa-70635b340/" target="_blank" className="border border-cyan-400 px-6 py-3 rounded-xl">
            LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
  {[
    "Python",
    "Java",
    "React",
    "Django",
    "MongoDB",
    "SQL",
    "Git",
    "YOLOv8",
  ].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-full bg-white/10 border border-cyan-400/30 backdrop-blur-lg hover:scale-110 transition"
    >
      {tech}
    </span>
  ))}
</div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <div>
            <h2 className="text-4xl text-cyan-400">8.56</h2>
            <p>CGPA</p>
          </div>

          <div>
            <h2 className="text-4xl text-cyan-400">3+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2 className="text-4xl text-cyan-400">4+</h2>
            <p>Certifications</p>
          </div>
        </div>

      </motion.div>
<div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}