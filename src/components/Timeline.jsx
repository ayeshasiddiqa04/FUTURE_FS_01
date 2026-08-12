export default function Timeline() {
  const events = [
    {
      year: "2023",
      title: "Started Engineering Journey",
    },
    {
      year: "2025",
      title: "Built Student Placement Portal",
    },
    {
      year: "2026",
      title: "Developed AI Health Companion",
    },
    {
      year: "2026",
      title: "Started CarioSpectra Research",
    },
    {
      year: "2027",
      title: "Graduation Goal",
    },
  ];

  return (
    <section className="py-24 px-8">
      <h2 className="text-5xl font-bold text-center mb-16">
        Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        {events.map((item, index) => (
          <div
            key={index}
            className="mb-8 backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl"
          >
            <h3 className="text-cyan-400 text-xl font-bold">
              {item.year}
            </h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}