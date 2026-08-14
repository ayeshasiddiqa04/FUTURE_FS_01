export default function Highlights() {
  const highlights = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description:
        "Built AI-powered applications using Machine Learning, Computer Vision, YOLOv8, OpenCV and Deep Learning.",
    },
    {
      title: "Full Stack Development",
      icon: "💻",
      description:
        "Developed responsive web applications using React, Django, SQL, MongoDB and REST APIs.",
    },
    {
      title: "Problem Solving",
      icon: "🧠",
      description:
        "Strong foundation in programming, algorithms, debugging and software engineering principles.",
    },
    {
      title: "Project Experience",
      icon: "🚀",
      description:
        "Designed and developed impactful projects including AI Health Companion, CarioSpectra and Student Placement Portal.",
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Highlights
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Key strengths, technologies and experiences that define my journey
          as an aspiring Software Engineer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="
              backdrop-blur-xl
              bg-white/10
              border border-white/20
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition-all
              duration-300
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >
            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}