import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Have an opportunity, project, or collaboration in mind?
          I'm always open to discussing software development,
          AI projects, internships, and innovative ideas.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-6 text-cyan-400">
            Send a Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Information */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-6 text-cyan-400">
            Contact Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-gray-400">Email</p>
                <p>ayeshsiddiqa04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-gray-400">Phone</p>
                <p>+91 7624887785</p>
              </div>
            </div>

            <a
              href="https://github.com/ayeshasiddiqa04"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <FaGithub className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-gray-400">GitHub</p>
                <p>github.com/ayeshasiddiqa04</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ayesha-siddiqa-70635b340/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <div>
                <p className="text-gray-400">LinkedIn</p>
                <p>linkedin.com/in/ayesha-siddiqa-70635b340</p>
              </div>
            </a>

            <div className="mt-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-400 font-semibold">
                🟢 Available for Internships & Software Development Opportunities
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}