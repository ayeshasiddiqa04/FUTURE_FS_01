export default function About() {
  return (
    <section id="about" className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

        <p className="text-lg text-gray-300 leading-8 text-center">
          I am <span className="text-cyan-400 font-semibold">Ayesha Siddiqa</span>,
          a final-year Engineering student passionate about Software Development,
          Artificial Intelligence, Machine Learning, and Full Stack Development.
          I enjoy building innovative solutions that solve real-world problems,
          from AI-powered healthcare applications to intelligent computer vision systems.
        </p>

        <p className="text-lg text-gray-300 leading-8 text-center mt-6">
          My goal is to become a successful Software Engineer by continuously
          learning new technologies, contributing to impactful projects, and
          creating applications that improve people's lives.
        </p>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white/10 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-cyan-400">
              Software Development
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Building scalable and efficient applications.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-purple-400/20 p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-300">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-bold text-purple-400">
              Artificial Intelligence
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Creating intelligent systems powered by AI.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-pink-400/20 p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-pink-500/20 transition-all duration-300">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-pink-400">
              Data Science
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Extracting insights from data to drive decisions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-green-400/20 p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-bold text-green-400">
              Full Stack Development
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Developing modern web applications end-to-end.
            </p>
          </div>

        </div>

        {/* Quick Info */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white/5 p-5 rounded-2xl text-center">
            <h3 className="text-cyan-400 font-bold text-2xl">8.56</h3>
            <p className="text-gray-400">CGPA</p>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl text-center">
            <h3 className="text-cyan-400 font-bold text-2xl">3+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl text-center">
            <h3 className="text-cyan-400 font-bold text-2xl">4+</h3>
            <p className="text-gray-400">Certifications</p>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl text-center">
            <h3 className="text-cyan-400 font-bold text-2xl">2027</h3>
            <p className="text-gray-400">Graduate</p>
          </div>

        </div>

      </div>

    </section>
  );
}