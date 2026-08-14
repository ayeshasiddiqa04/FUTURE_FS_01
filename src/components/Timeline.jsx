import { motion } from "framer-motion";

const events = [
  {
    year: "2023",
    title: "Started Engineering Journey",
    description:
      "Began B.E. in Data Science & Engineering and developed a strong foundation in programming, problem-solving, and software development.",
    icon: "🎓",
  },
  {
    year: "2025",
    title: "Student Placement Portal",
    description:
      "Developed a comprehensive placement preparation platform for students with interview resources, aptitude materials, and company-specific guidance.",
    icon: "💻",
  },
  {
    year: "2026",
    title: "AI Health Companion",
    description:
      "Built an AI-powered healthcare assistant focused on symptom analysis, health guidance, and support for rural communities.",
    icon: "🏥",
  },
  {
    year: "2026",
    title: "CarioSpectra Research",
    description:
      "Started research and development of a deep learning framework for intelligent dental caries detection using YOLOv8.",
    icon: "🦷",
  },
  {
    year: "2027",
    title: "Graduation & Career Growth",
    description:
      "Aiming to graduate successfully and begin a professional career as a Software Engineer specializing in AI and Full Stack Development.",
    icon: "🚀",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Journey
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A timeline highlighting my academic journey, projects,
          achievements, and future goals.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>

        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 flex ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            <div
              className="
                relative
                md:w-[45%]
                backdrop-blur-xl
                bg-white/10
                border border-white/20
                rounded-3xl
                p-6
                shadow-[0_0_30px_rgba(34,211,238,0.08)]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                transition-all
              "
            >
              {/* Timeline Dot */}
              <div
                className="
                  hidden md:flex
                  absolute
                  top-8
                  w-6
                  h-6
                  bg-cyan-400
                  rounded-full
                  border-4
                  border-slate-900
                  items-center
                  justify-center
                "
                style={{
                  right: index % 2 === 0 ? "-52px" : "auto",
                  left: index % 2 !== 0 ? "-52px" : "auto",
                }}
              />

              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-cyan-400 text-xl font-bold mb-2">
                {item.year}
              </h3>

              <h4 className="text-2xl font-semibold mb-4">
                {item.title}
              </h4>

              <p className="text-gray-300 leading-7">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}