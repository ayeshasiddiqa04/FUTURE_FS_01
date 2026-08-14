import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 80 },
      { name: "Django", level: 88 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 85 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Machine Learning", level: 80 },
      { name: "YOLOv8", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies and tools I use to build modern applications,
          AI-powered solutions, and scalable software systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="
              backdrop-blur-xl
              bg-white/10
              border border-white/20
              rounded-3xl
              p-8
              shadow-[0_0_30px_rgba(34,211,238,0.08)]
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              {category.title}
            </h3>

            {category.skills.map((skill, i) => (
              <div key={i} className="mb-6">

                <div className="flex justify-between mb-2">
                  <span className="text-gray-200">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-purple-400
                      to-pink-400
                    "
                  />

                </div>

              </div>
            ))}

          </motion.div>
        ))}

      </div>

      {/* Tech Chips */}
      <div className="flex flex-wrap justify-center gap-4 mt-16">

        {[
          "Python",
          "Java",
          "React",
          "Django",
          "MongoDB",
          "SQL",
          "Git",
          "GitHub",
          "Machine Learning",
          "YOLOv8",
          "OpenCV",
          "PyTorch",
        ].map((tech) => (
          <span
            key={tech}
            className="
              px-4 py-2
              rounded-full
              bg-white/10
              border border-cyan-400/30
              hover:bg-cyan-500/20
              hover:scale-110
              transition-all
              duration-300
            "
          >
            {tech}
          </span>
        ))}

      </div>

    </section>
  );
}