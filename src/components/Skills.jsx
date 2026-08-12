import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "Django", level: 88 },
  { name: "React", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "SQL", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <h2 className="text-5xl font-bold text-center mb-12">
        Skills & Technologies
      </h2>

      <div className="max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}